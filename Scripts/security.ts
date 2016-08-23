
var credentials = {
    user: "Caballero12Yuste",
    pass: "Tercios1585Empel"
};

var cookie = 'youareallowed=tousedreamsandfeels';

export function setCookie(res) {
    res.cookie('youareallowed', 'tousedreamsandfeels');
}

export function proveCookie(cookies) {
    if (cookies.cookie == cookie)
        return true;
    else
        return false;
}
