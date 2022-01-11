<template>
<div>
    <div v-if="loading">
        <Loading/>
    </div>
    <transition>
        <div v-if="api" class="content">
            <div class="course">
                <h1>{{api.nome}}</h1>
                <p>{{api.descricao}}</p>
                <h2>Aulas</h2>
                <ul class="class-room">
                    <li
                    v-for="aula in api.aulas"
                    :key="aula.id"
                    >
                        <router-link class="link" :to="{name: 'Aula', params: {aula: aula.id}}">
                            {{aula.nome}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
    name: "Curso",
    props: ["curso"],
    mixins: [fetchData],
    created() {
        this.fetchData(`curso/${this.curso}`)
    },
}
</script>

<style lang="scss" scoped>
    .course {
        h1 {
            color: #4b8;
            margin-bottom: 10px;
        }
        p {
            font-size: 14px;
            margin-bottom: 20px;
        }
        h2 {
            color: rgb(110, 106, 121);
        }
    }
    .class-room {
        li {
                a {
                    display: block;
                    border: 1px solid #eee;
                    border-radius: 4px;;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
                    background: white;
                    padding: 20px;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    &.router-link-exact-active {
                        color: white;
                        background: #4b8;
                    }
                }
            }
        }
</style>