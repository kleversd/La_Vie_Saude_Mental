const { expressjwt } = require("express-jwt");
const secret = require("../config/secret");

module.exports = expressjwt({
    secret: "secret",
    algorithms : ['HS256']
});