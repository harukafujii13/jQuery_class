//①creating a promise
const willGetYouSnacks = new Promise((resolve, reject) => {
    const random = Math.random //0-1
    if(random < 0.5){
        resolve()
    }else{
        reject()
    }
})

//②consume the promise
// willGetYouSnacks.then().catch()
willGetYouSnacks.then(() => {
    //will be executed on resolve (reslveの時に実行される)
    console.log("Will buy some snacks");
}).catch(() => {
    //will be executed on reject (rejectの時に実行される)
    console.log("Find another uncle");
}).finally(() => {
    //close a connection(例外の有無に関わらず、最終的に実行される p.101) // not required always
    console.log("Reached finally");
})
