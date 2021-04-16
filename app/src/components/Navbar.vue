<template>

<nav class="navbar">
    <ul>
    <router-link v-for="{ name,...link} of routerLinks" :key="name" v-bind={...link}>
        {{name}}
    </router-link>
</ul>
</nav>
</template>

<script lang="ts">
    import Vue from 'vue'

    import {RouterLinks} from "../types/interfaces/RouterLinkObject"
  
    interface Data {
        links: RouterLinks
    }

    interface Computed {
        routerLinks: RouterLinks
    }

    export default Vue.extend<Data, Record<string, unknown>, Computed>({
        data(){
            return {
                links: [
                    { name: "Home", to: "/"},
                    { name: "About", to: "/about"},
                ]
            }
        },
        computed: {
            routerLinks(){
                return [...this.links]
            }
        }
    })
</script>

<style scoped>

</style>