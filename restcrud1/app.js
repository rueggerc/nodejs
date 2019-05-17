var express = require("express");
var bodyParser = require("body-parser");
var service = require("./service");

// Setup
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// GET Users
app.get("/users", (request,response) => {
    console.log("GET USERS");
    let users = service.getUsers();
    response.json(users);

});

// Get User
app.get("/user/id/:id", (request,response) => {
  let id = request.params.id;
  console.log("GET User=" + id);
  let userData = service.getUser(id);
  response.json(userData);
});

// POST
app.post("/user", (request,response) => {
  console.log("INSIDE POST");
  let payload = JSON.stringify(request.body);
  console.log("PAYLOAD=" + payload);
  response.json({status:200});
});

// PUT
app.put("/user", (request,response) => {
  console.log("INSIDE POST");
  let payload = JSON.stringify(request.body);
  console.log("PAYLOAD=" + payload);
  response.json({status:200});
});

// DELETE
app.delete("/user/id/:id", (request,response) => {
    console.log("INSIDE DELETE");
    response.json({status:200});
});


// Server
app.listen(3000, () => {
    console.log("Server Running on port 3000");
});