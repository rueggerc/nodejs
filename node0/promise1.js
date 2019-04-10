var fs = require('fs');

console.log("Here we go!");


var myResolver = function() {
	console.log("My Resolver");
}

var myRejector = function() {
	console.log("My Rejector");
}

async function promise1(thevalue) {
	console.log("Start the Promise");
	if (thevalue === 42) {
		throw new PermissionDenied();
	}

}

promise1(33).then(myResolver,myRejector);
promise1(42).then(myResolver,myRejector);

(async () => {
	console.log("Yo Ruge Inside Lambda Promise async");
})().then();


console.log("Create explicit promise");
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code)
  console.log("===== INSIDE EXECUTOR CODE");
  resolve("foo");
});

var alert = () => {
  console.log("Inside alert!");
}

async function f() {
  console.log("return 1");
  return 1;
}

f().then(alert); // 1