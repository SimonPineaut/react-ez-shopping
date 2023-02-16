import { removeFromBasket } from "../store/basketSlice";

const logger = store => next => action => {
    // console.log('state dans MIDDLEWARE', store.getState());
    if (action.type === 'basket/removeFromBasket') {
        // console.log('paylod dans MIDDLEWARE', action.payload);
    }
    let result = next(action)
    return result
}

export default logger