<template>
    <div>
        <div v-if="loading">
            <Loading/>
        </div>
        <transition mode="out-in">
            <div v-if="api">
                <h2>{{api.nome}}</h2>
                <div class="video">
                    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${api.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
    name: "Aula",
    props: ["aula"],
    mixins: [fetchData],
    created() {
        this.fetchData(`aula/${this.aula}`)
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchData(`aula/${to.params.aula}`)
        next()
    }
}
</script>

<style lang="scss" socped>
    h2 {
        color: rgb(110, 106, 121);
        margin-bottom: 10px;
    }
    .video {
        position: relative;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>