
"use strict";

module.exports.getUsers = function() {
    console.log("Service getUsers()");
    let users = ["Fred", "Barney", "Wilma", "Betty"];
    return users;
}

module.exports.getUser = function(id) {
    console.log("Service Get user for ID=" + id);
    let user = {
        name: "Fred",
        age: 44
    }
    return user;
}

