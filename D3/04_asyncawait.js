async function hello(){
    //return 0 //resolve
    //throw new Error //reject

    if(true){
        throw "byebye";
    }
    return "whatsup";
}

// console.log(hello());

// hello()
// .then(data => console.log(data))  
// .catch(err => console.log(err))



const login = async(user, pass) => {  // ||→左右の式のどちらかがtrueの場合はtrue
    //valuation
    if(!user || !pass) throw 'Missing Credentials';
    if(pass === "corgiislove") return `Welcome ${user}`

    throw 'Invalid Credentials'
}

// login('hoge', 'corgiislove').then(data => console.log(data))

//promosed fakerequest(backend)
const fakerequest = (url) => {
    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 2500)

        setTimeout(() => { 
            console.log(delay);
            if(delay > 3000){
                reject("Connection Timeout")
            } else {
                resolve("Here's your fake data ...." + url)
            }   
        }, delay);
    })
}

// makerequest
async function makerequest() {

    try{             //例外が発生するかもしれない命令
        const data1 = await fakerequest("/page1")  //async(use only for resolve)とawaitはセット
        console.log(data1)
    }catch(err){      //例外が発生した時に実行される命令　(err)→例外情報を受け取る変数
        console.log(err)
    }
   
}

makerequest()