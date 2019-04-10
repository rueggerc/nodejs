

var alert = (result)=> {
  console.log("Inside alert result=" + result);
}

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  // works only inside async functions
  console.log("Now we wait on the inner promise");
  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

var myResolver = () => {
	console.log("My Resolver");
}

f();

f().then(myResolver);