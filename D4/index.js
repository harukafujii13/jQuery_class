const listElement = document.querySelector(".posts")
const fetchButton = document.querySelector("#available-posts button")
const postTemplate = document.querySelector("template")

async function sendHttpRequest(){
    //with XHR
    // const promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest()
    //     xhr.open(mehod, url)
    //     xhr.onload = function(){
    //         (xhr.status >= 200 && xhr.status < 300){

    //             // return back the data
    //             resolve(xhr.response)
    //         }else{
    //             reject("Something went wrong...")
    //         }
    //     }
    //     // xhr.send();
    // })
    // return promise


    // with fetch() function
    // const response = fetch(url, {method})
    // console.log(response);
    // const result = await response.json()
    // return result

    // return await fetch(url, {method}).then(r => r.json())

    //＊with axios
    const {data} = await axios(url, { method })
    return data
    // return axios.get(url)

    

}

async function fetchPosts() {
    const responseData = await sendHttpRequest("GET", "https://jasonplacehplder.com/posts")

    if(responseData.length > 0){
        for(const post of responseData){
            const postElClone = document.importNode(postTemplate.content, true)
            postElClone.querySelector("h2").textContent = post.title
            postElClone.querySelector("p").textContent = post.body
            postElClone.querySelector("li").id = post.id
            listElement.appendChild(postElClone)
            //inject data into each clone templates
            //append to list
        }
    }
}

// READ/GET
listElement.addEventListener("click", fetchPosts)