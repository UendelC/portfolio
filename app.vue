<template>
    <div class="body">
        <Header />
        <main>
            <SideBar />
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<script>
export default {
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: black;
    }

    .body {
        background-color: black;
        margin: 0;
        padding: 0;

        width: 100%;

        min-height: 100vh;

        display: flex;
        flex-direction: column;
    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
