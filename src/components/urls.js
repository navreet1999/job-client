const API_URL = process.env.API_URL || "http://localhost:5000"
module.exports = {
    LOGIN_URL = API_URL + '/users/login',
    SIGNUP_URL = API_URL + '/users/add'
}