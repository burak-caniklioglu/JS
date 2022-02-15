let lottery = () => {
    let arr = []
    for(let i = 0 ; i < 6 ; i++){
        let number = Math.floor(Math.random() * 50)+1
        arr.push(number)
    }

    return arr
}

console.log(lottery())