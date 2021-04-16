<template>
    <div v-if="show" :class="classObject" @click="closeFunction">
    <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            show: {
                type: Boolean,
                required: true
            },
            closeFunction: {
                type: Function,
                required:true
            }
        },
        computed: {
            classObject(){
                return{
                    showModal: this.show ? 'backdrop--show' : 'backdrop--hide'
            }
            }
        }
    })
</script>

<style lang="scss" scoped>
.backdrop {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 10000;
	background: #000;
	opacity: .8;
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	&--show {
		@extend .backdrop;
		transition: transform 500ms ease-in;
		transform: scale(1);
	}
	&--hide {
		@extend .backdrop;
		transition: transform 250ms ease-out;
		transform: scale(0);
	}
}

</style>