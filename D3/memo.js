// const someFunk = (x) => x + 1;
// console.log(someFunk(4));

//Exam content!!
// console.log("Sending request to server!");
// setTimeout(function(){             // Web API function(JS asks Browser to set a time)
//     console.log("Here is your data from the server...")
// }, 3000);
// console.log("I AM AT THE END OF THE FILE.");


const greet = () => {
    console.log("hi");
};

const showAlert = () => {
    alert("Danger!");
};

setTimeout(showAlert, 2000);
greet();