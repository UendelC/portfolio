<template>
    <nav>
        <ul>
            <li @click="select" class="active" data-index-number="0">
                <NuxtLink to="/" exact-active-class="active">
                    <img src="images/profile.jpg" alt="">
                </NuxtLink>
            </li>
            <li @click="select">
                <NuxtLink to="/projects" exact-active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2h4Z"></path></svg>
                </NuxtLink>
            </li>
            <li @click="select">
                <NuxtLink to="/blog" exact-active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48H56a16 16 0 0 0-16 16v120a8 8 0 0 1-16 0V88a8 8 0 0 0-16 0v96a24 24 0 0 0 24 24h176a24.1 24.1 0 0 0 24-24V64a16 16 0 0 0-16-16Zm-40 104H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm0-32H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Z"></path></svg>
                </NuxtLink>
            </li>
            <li @click="select">
                <NuxtLink to="/about" exact-active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563q.437-.712 1.162-1.087q1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163q.725.375 1.162 1.087Q20 16.35 20 17.2V20Z"></path></svg>
                </NuxtLink>
            </li>
            <li @click="select">
                <NuxtLink to="/contact" exact-active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"></path></svg>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                selectedIndex: 0,
            }
        },
    };
</script>

<style scoped>
    ul {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;

        width: 7vh;
        height: 42vh;
        margin: auto 0;

        border-radius: 0 50px 50px 0;
        border-style: solid solid none none;
        border-color: white;
        border-width: 0.5px;

        background-color: #181818;
    }

    a.active {
        list-style-type: none;
        color: white;
        background: #990000;
        mix-blend-mode: normal;
        box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
        border-radius: 0px 10px 10px 0px;
        width: 5.5vh;
        height: 5.5vh;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        width: 3.6vh;
        height: 3.6vh;
        margin: auto 0;
        padding-left: 0.7vw;
        color: white;
        cursor: pointer;
    }

    img {
        width: 3.6vh;
        height: 3.6vh;
        border-radius: 50%;
        padding-left: 0.7vw;
        cursor: pointer;
    }
</style>