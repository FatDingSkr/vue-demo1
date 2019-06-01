

export default {
    getters(state){
        let cars = state.cars
        let total = {num:0,price:0}
        cars.forEach(item=>{
            total.price += item.marketPrice * item.num
            total.num += item.num
        })
        
        return total
    }
}