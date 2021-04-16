
import Vue from "vue"


export default function useCatchError() {
    

    type ErrorState = Record<"error", Error| null>

    const errorState = Vue.observable<ErrorState>({error: null })

    
    function catchError(error:Error) {
        errorState.error = error
    }

    

    function clearError() {
        errorState.error = null

    }

    return {
        errorState,
        catchError,
        clearError
    }

}




