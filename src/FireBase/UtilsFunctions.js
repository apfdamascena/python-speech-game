export default function isEmail(email){
    let exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    let check=/@[w-]+./;
    let checkEnd=/.[a-zA-Z]{2,3}$/;
    if(email.search(exclude) != -1 || email.search(check) == -1 || email.search(checkEnd) == -1 || email.length < 4){
        return false;
    }
    return true;
}

export default function isPassword(password){
    if(password.length < 5){
        return false;
    }
    return true;
}