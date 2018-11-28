
const token = 'TOKEN';
const loginname = 'LOGINNAME';

export function setToken(val){
    localStorage.setItem(token,val);
}

export function getToken(){
    return localStorage.getItem(token);
}

export function setLoginName(val){
    return localStorage.setItem(loginname,val);
}

export function getLoginName(){
    return localStorage.getItem(loginname);
}

export function removeLocalStorage(){
    localStorage.removeItem(token);
    localStorage.removeItem(loginname);
}