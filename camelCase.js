/**
 * 
 * @param {string} str 
 * @returns {string}
 */

function camelCase(str) {
    let char = "-";
    if (str.includes("_")) char = "_";

    let arr = str.split(char);
     console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(i===0){
            if (isUpperCase(arr[i].charAt(0))){
                arr[i].charAt(0).toUpperCase()
            }
        }
        else{
            
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1)
            
        }
        
       
    }

    return arr.join("")
}
function isUpperCase(string) {
    return string.toUpperCase() === string;
  }

console.log(camelCase('The-cat-isHungry')); 
