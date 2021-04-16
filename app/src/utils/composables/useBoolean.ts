

import Vue from "vue"

export default function useBoolean(initBoolean = false) {



const booleanState =  Vue.observable({boolean: initBoolean})


    function setToTrue() {

        booleanState.boolean = true

    }
    function setToFalse() {

        booleanState.boolean = false

    }
    function toggle() {
        booleanState.boolean = !booleanState.boolean

    }

    return {
        get boolean() {
            return booleanState.boolean
        },
        setToTrue,
        setToFalse,
        toggle
    }

}
