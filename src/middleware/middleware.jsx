import { removeFromBasket } from "../store/basketSlice";

const logger = store => next => action => {
    // console.log('state dans MIDDLEWARE', store.getState());
    if (action.type === 'user/createUser') {

    }
    let result = next(action)
    return result
}

export default logger