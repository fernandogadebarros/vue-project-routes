<template>
    <div>
        <div v-if="loading">
            <Loading/>
        </div>
        <transition mode="out-in">
            <div v-if="api" class="content">
                <div class="content-home">
                    <h1>Sobre a {{api.titulo}}</h1>
                    <p>{{api.descricao}}</p>
                    
                    <router-link 
                    class="btn-courses" 
                    tag="button" 
                    :to="{name: 'Cursos'}">Cursos</router-link>
                    
                    <div class="reviews">
                        <h2>Avaliações</h2>
                        <ul>
                            <li 
                            v-for="review in api.avaliacoes" 
                            :key="review.nome">
                                <p>{{review.nome}}</p>
                                <p>{{review.descricao}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="@/assets/aprender.png" alt="Aprenda Web Design">
            </div>
        </transition>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'Home',
    mixins: [fetchData],
    created() {
        this.fetchData('home')
    }
}
</script>

<style lang="scss" scoped>
    .content-home {
        h1 {
            font-weight: 900;
        }

        .reviews ul {
            p {
                &:nth-of-type(1) {
                    font-weight: 700;
                    font-size: 15px;
                    margin: 0;
                    padding: 0;
                }
                &:nth-of-type(2) {
                    margin-bottom: 5px;
                    padding-bottom: 5px;
                    font-size: 13px;
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }
    .btn-courses {
        border: none;
        background: #4b8;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        padding: 15px 20px;
        font-size: 1rem;
        margin-bottom: 40px;
        margin-top: 10px;
        box-shadow: 0 4px 2px rgba(0,0,0,.1);
    }
</style>
