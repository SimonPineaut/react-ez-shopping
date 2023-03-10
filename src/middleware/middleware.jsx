const logger = store => next => action => {
    if (action.type === 'user/createUser') {
        localStorage.setItem('user', JSON.stringify(action.payload))
    }

    let result = next(action)
    return result
}

export default logger