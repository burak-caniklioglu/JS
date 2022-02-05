function fibo(n){
    let a = [1,2]
    if(n==1) return a[0]
    if(n==2) return a[1]
    for(let i=3;i<=n;i++){
        a.push(a[a.length-1]+a[a.length-2])
    }
    return a[a.length-1]

}