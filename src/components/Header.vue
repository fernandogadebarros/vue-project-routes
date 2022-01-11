<template>
    <header>
        <nav>
            <div class="logo">
                <router-link to="/">Techno</router-link>
            </div>
            <ul>
                <li>
                    <router-link to="/cursos">Cursos</router-link>
                </li>
                <li>
                    <router-link to="/contato">Contato</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss" scoped>
header {
    background: #234;
    padding: 20px;
    .logo {
        flex: 1;
        a {
            color: white;
            font-size: 1.2rem;;
            &.router-link-exact-active {
                color: white;
            }
        }
    }
    nav {
        max-width: 800px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
            display: flex;
            li {
                a {
                    color: white;
                    margin: 0 10px;
                    &.router-link-exact-active {
                        color: #4b8;
                    }
                }
            }
            li:last-child {
                a {
                    margin-right: 0;
                }
            }
        }
    }
}


</style>