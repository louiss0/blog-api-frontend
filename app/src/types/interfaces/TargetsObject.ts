
export default interface TargetsObject<T extends EventTarget > extends Event{
    target:T
    currentTarget:T
}