import {UPDATE,CHANGEROUTE} from './const'
export default {
    [UPDATE](state,newCars){
        state.cars = newCars
    },
    [CHANGEROUTE](state,newRoute){
        state.lastRoute = newRoute
    }
}