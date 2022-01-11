<template>
    <div>
        <div v-if="loading">
            <Loading/>
        </div>
        <transition mode="out-in">
            <div v-if="api" class="content">
                <div class="content-title">
                    <h1>{{api.titulo}}</h1>
                    <p>{{api.descricao}}</p>
                </div>
                <ul class="content-list">
                    <li 
                    v-for="course in api.cursos"
                    :key="course.id">
                        <router-link
                        :to="{name: 'Curso', params: {curso: course.id}}"
                        >
                            <h2>
                                {{course.nome}} - {{course.totalAulas}} | {{course.horas}} horas
                            </h2>
                            <p>{{course.descricao}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'Cursos',
    mixins: [fetchData],
    props: ["curso"],
    created() {
        this.fetchData('cursos')
    },

}
</script>

<style lang="scss" scoped>
    .content-title {
        h1 {
            font-weight: 900;
        }
        p {
            font-size: 14px;
        }
    }
    .content-list {
        li {
            margin-bottom: 20px;
            h2 {
                font-weight: 700;
                color: rgb(110, 106, 121);
            }
            p {
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
</style>