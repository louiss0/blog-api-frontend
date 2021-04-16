import { Location, } from "vue-router"

export interface RouterLinkObject {
    name: string
    to: string | Location
    exact?: boolean
    activeClass?: string
    replace?: boolean
    tag?: string
    exactActiveClass?:string
    ariaCurrentValue?: 'page' | 'step' | 'location' | 'date' | 'time'
}

export type RouterLinks = Array<RouterLinkObject>
