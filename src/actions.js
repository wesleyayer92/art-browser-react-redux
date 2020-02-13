export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';

export function actionSearch(query) {
    return {
        type: SEARCH,
        query
    }
}

export function actionSelect(id) {
    return {
        type: SELECT,
        id
    }
}