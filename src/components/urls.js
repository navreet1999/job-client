const API_URL = 'https://api-search-job.herokuapp.com';
console.log(API_URL);
module.exports = {
    LOGIN_URL : API_URL + '/users/login',
    SIGNUP_URL : API_URL + '/users/add'
}