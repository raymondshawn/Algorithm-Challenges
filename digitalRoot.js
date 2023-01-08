function digitalRoot(n) {
    // ...
    let str=n.toString();
    let arr=str.split('');
    let sum=0;
    for(let num of arr){
      sum+= +num;
      
    }
    if(sum>9){
      return digitalRoot(sum);
    }
    
    return sum;
    
  }
  console.log(digitalRoot(129))