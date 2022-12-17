import { PERSONAJES } from '../actions/index.js'

const initialState = {
    personaje: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAJES:
            return {
                ...state,
                personaje: action.payload
            }
        default: return state
    }
}

export default rootReducer;