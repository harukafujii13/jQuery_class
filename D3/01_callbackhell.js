// document.body.style.backgroundColor = "yellow"

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow"

//     setTimeout(() => {
//         document.body.style.backgroundColor = "red"

//         setTimeout(() => {
//             document.body.style.backgroundColor = "green"

//             setTimeout(() => {
//                 document.body.style.backgroundColor = "blue"

//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "orange"
//                 }, 1000);

//             }, 1000);
//         }, 1000);

//     }, 1000);

// }, 1000);




// const delayedColorChange = (color, delay) => {
//     setTimeout( () => {
//         document.body.style.backgroundColor = color;
//     }, delay);
// }

// delayedColorChange('blue', 1000);
// delayedColorChange('red', 2000);
// delayedColorChange('orange', 3000);





const delayedColorChange = (color, delay, fn) => {
    setTimeout( () => {
        document.body.style.backgroundColor = color;

        if(fn){
            fn();
        }

    }, delay);
}

delayedColorChange('blue', 1000, () => {
    delayedColorChange('red', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('orange', 1000, () => {
                delayedColorChange('green', 1000)
            })
        })
    })
});
