const array=["cat","human","bird"];
let longeststringcontainer
for (let i=0; i<array.length-1; i++){

if (array[i].length>array[i+1].length)
console.log(longeststringcontainer=array[i])
else if (array[i].length<array[i+1].length)
console.log(longeststringcontainer=array[i+1])
//else 
//console.log(array[i],array[i+1]=longeststringcontainer) 
} 