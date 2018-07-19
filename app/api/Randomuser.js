const BASE_URL = 'https://randomuser.me/api/'

export function fetchData(results = 10) {
    return fetch(`${BASE_URL}?results=${results}`)
}

export function fetchPerPage(page = 0, results = 10) {
    return fetch(`${BASE_URL}?results=${results}&page=${page}`)
}