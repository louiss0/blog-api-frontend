import AuthModuleProps from "@/types/enums/AuthModuleProps"
import { Module,  } from "vuex"

interface TokenAuthState {
    token: string | null
}

const auth: Module<TokenAuthState, Record<string, unknown>> = {
    state: {
        token: null
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token
        },
        parsedToken(state) {
            return state.token ? JSON.parse(state.token): null
        }
    },
    mutations: {
        [AuthModuleProps.GetTokenFromLocalStorage](state) {
            
            const token = localStorage.getItem("token")

            if (!token) {
                return token
            }

            state.token = token

            return state.token 

        },
        [AuthModuleProps.LogIn](state, payload:string) {
            
            localStorage.setItem("token", payload)

            state.token = payload

        },
        [AuthModuleProps.LogOut](state) {
            
            localStorage.removeItem("token")
            
            state.token = null

        },
        
    },
    actions: {
        [AuthModuleProps.GetTokenFromLocalStorage](context, payload) {
            
            context.dispatch(AuthModuleProps.GetTokenFromLocalStorage, payload)
        },
        [AuthModuleProps.LogIn](context, payload) {
            
            context.dispatch(AuthModuleProps.LogIn, payload)
        },
        [AuthModuleProps.LogOut](context) {
            
            context.dispatch(AuthModuleProps.LogOut)
        },
    }
    
}


export default auth