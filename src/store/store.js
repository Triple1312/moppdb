import {createStore} from 'redux'

const initState = {
    loggedIn: false,
}

function stateReducer(state=initState, action) {
    switch (action.type) {
        case "loggedIn":
            return {...state, loggedIn: true}
        case "loggedOut":
            return {...state, loggedIn: false}
        default:
            return state;
    }
}


const store = createStore(stateReducer);