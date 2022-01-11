<template>
    <div>
        <div v-if="loading">
            <Loading/>
        </div>
        <transition mode="out-in">
            <div v-if="api" class="contact">
                <h1>{{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                <ul>
                    <li>
                        <b>Email:</b>
                        {{api.contato.email}}
                    </li>
                    <li>
                        <b>Telefone:</b>
                        {{api.contato.telefone}}
                    </li>
                    <li>
                        <b>Endereço:</b>
                        {{api.contato.endereco}}
                    </li>
                </ul>
            </div>  
        </transition>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'Contato',
    mixins: [fetchData],
    created() {
        this.fetchData('contato')
    }
}
</script>

<style lang="scss" scoped>
    .contact {
        h1 {
            font-weight: 900;
            margin-bottom: 10px;
        }
        p {
            font-size: 15px;
            margin-bottom: 10px;
            color: rgb(110, 106, 121);
        }

        ul {
            li {
                font-size: 14px;
                margin-bottom: 5px;
                b {
                    color: rgb(110, 106, 121);
                }
            }
        }
    }
</style>