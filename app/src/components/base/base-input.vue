<template>
    <fieldset class="fieldset">
    <label :for="name" class="text-transform--capitalize"> {label} </label>
			<input
				:id="name"
				:name="name"
				:placeholder="placeholder"
				:class="inputClass"
				v-bind="{...$attrs}"
                v-on="{...$listeners}"
			/>		
        <slot>

        </slot>

    </fieldset>
</template>

<script lang="ts">
    import Vue from 'vue'

export default Vue.extend({
        inheritAttrs: false,
        props: {
             name: {
                type: String,
                required: true
             },
             type: {
                type: String,
                required: true
             },
             placeholder: {
                type: String,
                required: true
             },
             label: {
                type: String,
                required: true,
             },
             inputClass: {
                type: String,
                required: false,
             },
        },
        computed: {
            listeners(){
                return {
                    ...this.$listeners,
                    input:(event)=> this.$emit("input", event.target.value)
                }
            }
        }
    })
</script>

<style lang="scss" scoped>

.fieldset{
    border: none;
}

</style>