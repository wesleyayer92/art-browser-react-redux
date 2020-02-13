import { SEARCH, SELECT } from "./actions";

const defaultState = {
    query: '',
    results: []
}
export function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                query: action.payload.query
            }
            break;
        case SELECT:
            return {
                ...state,
                results: action.payload.results
            }
    }
}