<template>
    <button class="button" v-bind="{...$attrs}" :class="buttonClass" :type="type" @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        inheritAttrs: false,
        props:{
            type:{
                type: String,
                required:false,
                validator(value){
                    return ["button", "submit","reset"].includes(value)
                },
                default: "button"
            },
            buttonClass: {
                type: String,
                required:false
            }

        },
        methods:{
            onClick(event){
                this.$emit("click", event)
            }

        }
    })
</script>

<style scoped>

</style>