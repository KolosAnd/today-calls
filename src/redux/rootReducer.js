import {types} from "./types";

function rootReducer(state = { value: 'all' }, action) {
    switch (action.type) {
        case types.ALL:
            return { value: 'all' }
        case types.NEXT:
            return { value: 'next' }
        case types.FINISH:
            return { value: 'finish' }
        default:
            return state
    }
}

export default rootReducer;