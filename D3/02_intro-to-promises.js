// Using callbacks

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 5000);

//     setTimeout(() => {
//         if(delay > 3000){
//             failure("Connection Timeout");
//         } else {
//             success("Here's your fake data ...." + url);
//         }
//     }, delay);
// }

// fakeRequestCallback("location.com", (successMsg) => {
//     console.log(successMsg);
// }, (failMsg) => {
//     console.log(failMsg);
// });





//Using promises
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 5000);


        setTimeout(() => { 
            if(delay > 3000){
                reject("Connection Timeout")
            } else {
                resolve("Here's your fake data ...." + url)
            }   
        }, delay);

    });
}

fakeRequestPromise("lolcats.com")
    .then((args) => {
    console.log(
        "==========\n", args, "\n=========="
        );
    })
    .catch((error) => {
    console.log(
        "==========\n", error, "\n=========="
        );
    })

    //fn().then(fn).catch(fn)