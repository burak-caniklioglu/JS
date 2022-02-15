

let mySort =(arr) => {
    for(let i=0; i<arr.length;i++){
        for(let j = i; j<arr.length; j++){
            if(arr[j]<arr[i]){
                let x = arr[j]
                arr[j] =arr[i]
                arr[i] = x
            }
        }
    }
    return arr
}

console.log(mySort([999, 333, 2, 8982, 12, 45, 77, 99, 11]));

