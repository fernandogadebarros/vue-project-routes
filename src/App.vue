<template>
    <div id="app">
    <Header/>
    <router-view class="container"></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;0,900;1,400&display=swap');
        font-family: 'Poppins', sans-serif;
        color: #234;
        
        ul {
            list-style: none;
        }
        a {
            font-weight: bold;
            text-decoration: none;
            color: #234;
        }
        .container {
            margin: auto;
            max-width: 800px;
            padding: 20px;
        }

        .content {
            display: grid;
            grid-template-columns: 1fr minmax(200px, 400px);
            grid-gap: 30px;

            @media(max-width: 600px) {
                display: block;
            }
        }

        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translate3d(-20px, 0, 0);
        }
        .v-enter-active {
            transition: all .4s;
        }
        img {
            max-width: 100%;
        }
    }
</style>
