const keys = [];
addEventListener("keydown", (event) => {
    keys.push(event.key)
    keys.forEach((el, i)=> {
        if(keys[i-1] === "Control" && el === "b" || el === "B" ) {
            keys.splice(0,keys.length);
            alert("Вы root")
        }
        if(keys[i-1] === "Control" && el === "q" || el === "Q"){
            keys.splice(0,keys.length);
            alert("Вы user")   
        }
    })
})