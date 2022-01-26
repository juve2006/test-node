
const fs = require('fs');

let path = 'C:/Users/User/test-node/users/users.json';

fs.readFile(path, "utf8",
    function(error,data){
        console.log("async readfile");
        if(error) throw error;
        console.log(data);
    });