/*
@params {number} num
@return string

*/

function fizzbuzz(num){
    for(let i=0;i<num;i++){
        if(i%3==0) console.log('fizz');
        if(i%5==0) console.log('buzz');
        if(i%15==0) console.log('fizzbuzz');
      
        console.log(i);
    }
}

fizzbuzz(100)