let frequencyCount = (words) => {
    let obj = {}
    for(let index = 0; index < words.length; index++){
        let count = 0;
        for (let temp = 0; temp < words.length; temp++) {
           if(words.charAt(index) == words.charAt(temp)){
            count++;
           }
            
        }
        obj[words.charAt(index)] = count;
    }
    return obj
}

module.exports = {frequencyCount}