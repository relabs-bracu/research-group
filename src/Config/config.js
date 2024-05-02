// dev Base URL
// const BASE_URL = 'http://192.168.0.104:5000'
const BASE_URL = 'http://localhost:5000'

const PUBLICATION = {
    GET_LIST: BASE_URL + '/api/publications/list' , // + ?limit=${ limit }&page=${ page }
    GET_RECENT: BASE_URL + '/api/publications/all' ,
    ADD_NEW: BASE_URL + '/api/publications/add-paper'
}

const USER = {
    GET_ALL: BASE_URL + '/api/users/all' ,
    GET_INDIVIDUAL: BASE_URL + '/api/users/', // + /user_id
    REGISTER: BASE_URL + '/api/auth/register',
    LOGIN: BASE_URL + '/api/auth/login',
    WITH_PRIVILEGE: BASE_URL + '/api/users/with-privilege'
}

const NEWS = {
    GET_ALL: BASE_URL + '/api/news/all',
    GET_RECENT: BASE_URL + '/api/news/recent', // data of 15 days
}

const AWARD = {
    GET_ALL: BASE_URL + '/api/awards/all',
}

const PROJECTS = {
    GET_ALL: BASE_URL + '/api/projects/all',
}

const FUNDINGS = {
    GET_ALL: BASE_URL + '/api/fundings/all',
}

export { BASE_URL, PUBLICATION, USER, NEWS, AWARD, PROJECTS, FUNDINGS }