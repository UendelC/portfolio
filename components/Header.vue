<template>
    <header>
        <img src="images/profile.jpg" :alt="profileAlt">
        <div class="soundcloud-pill" @click="toggleSound">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.24-2.34-2.23-4.17-4.68-4.17c-1.17 0-2.28.44-3.11 1.16m-.88 1.02c-.3-.18-.62-.32-.97-.39V17h1.39V9.34c-.15.16-.29.36-.42.55m-2.35-.54V17h.92V9.38c-.19-.03-.38-.04-.58-.04c-.12 0-.23 0-.34.01M6.5 10v7h.91V9.54c-.33.11-.64.27-.91.46m-1.67 2.5c-.06 0-.12-.06-.19-.09V17h.92v-6.14c-.37.48-.62 1.05-.73 1.64m-2.04-.28v4.69c.21.06.45.09.71.09h.22v-4.86c-.08-.01-.16-.02-.22-.02c-.26 0-.5.04-.71.1M1 14.56c0 .75.34 1.41.87 1.86v-3.71c-.53.44-.87 1.11-.87 1.85Z"></path></svg>
            <span>sound <strong :class="soundActive">{{ soundActiveLabel }}</strong></span>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            sound: false,
            profileAlt: '',
        };
    },

    methods: {
        toggleSound() {
            this.sound = !this.sound;
            const music = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');

            if (this.sound) {
                music.play();
                return;
            }

            music.pause();

        },
    },

    computed: {
        soundActive() {
            return this.sound ? 'active' : '';
        },

        soundActiveLabel() {
            return this.sound ? 'ON' : 'OFF';
        },
    },

    mounted() {
        $fetch('http://localhost:1337/api/header').then(res => {
           this.profileAlt = res.data.attributes.imageAlt;
        });
    },

    created() {
    },
};
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: auto;
        margin-right: auto;
        width: 87.5%;
        height: 7.4%;
        margin-top: max(20px, 2.4vmax);
        margin-bottom: 1.4vh;
    }

    header > img {
        border-radius: 50%;
        width: 13vmin;
        height: 13vmin;
    }
    .soundcloud-pill {
        width: 17vh;
        height: 4.16vh;

        display: flex;
        justify-content: space-around;
        align-items: center;

        background: linear-gradient(270deg, rgba(255, 255, 255, 0.6) -3.2%, rgba(255, 254, 254, 0.1) 91.05%);
        mix-blend-mode: normal;
        opacity: 0.8;
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(40px);

        border-radius: 1.5vmax;
        border: 0.6px solid #fff;

        cursor: pointer;
    }

    .soundcloud-pill:hover {
        border: 0.6px solid silver;
    }

    svg {
        color: #EB3223;
        width: 3.5vh;
        height: 3vh;
        margin-bottom: 0.2vmax;
    }

    .soundcloud-pill span {
        font-family: 'Oswald', 'sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 2.1vh;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        text-align: center;

        margin-bottom: 0.2vmax;

        color: #FFFFFF;
    }

    strong {
        margin-left: 0.3vw;
    }

    strong.active {
        color: #f81500;
        font-weight: 700;
    }

</style>