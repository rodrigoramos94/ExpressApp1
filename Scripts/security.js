"use strict";
var credentials = {
    user: "Caballero12Yuste",
    pass: "Tercios1585Empel"
};
var cookie = 'youareallowed=tousedreamsandfeels';
function setCookie(res) {
    res.cookie('youareallowed', 'tousedreamsandfeels');
}
exports.setCookie = setCookie;
function proveCookie(cookies) {
    if (cookies.cookie == cookie)
        return true;
    else
        return false;
}
exports.proveCookie = proveCookie;
