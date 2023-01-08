function nestedSum(arr){
    let sum=0;
  
    for(let item of arr){
        if(Array.isArray(item)){
            sum+=nestedSum(item)
        }
        else{
            sum+=item
        }
        
    }

    return sum;

}

let arr=[1,2,[3,4]]
console.log(nestedSum(arr));