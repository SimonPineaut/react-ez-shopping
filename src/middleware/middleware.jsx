const logger = store => next => action => {
    console.log('MIDDLEWARE', action);
    console.log('STATE', store.getState());
    let result = next(action)
    return result
}

export default logger