const isValidJSON = obj  => {
    try {
        JSON.parse(obj);
        return true;
    }
    catch(error) {
        return false;
    }
};
console.log(isValidJSON(null));
console.log(isValidJSON('{"name":"Huy","age":20}'));
console.log(isValidJSON('{"name:"Huy",age:"20"}'));
