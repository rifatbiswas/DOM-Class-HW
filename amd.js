let rifat=[1,2,3,4,5]
rifat.forEach(function(x){
    console.log(x)
})

const highValue = rifat.reduce(function(prev,curr){
    return Math.max(prev, curr)
}, 0)
console.log(highValue);