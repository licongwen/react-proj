
const token = 'TOKEN';

export function setToken(val){
    localStorage.setItem(token,val);
}

export function getToken(){
    return localStorage.getItem(token);
}