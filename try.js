


let loop = (arr) => {
    let array = new Array();
    for (let index = 0; index < arr.length; index++) {
        array.push(0);
    }
    console.log(array);
    return array;

}

let result = (values) =>{
   
    let arr = loop(values);
    let count = 0;

values.forEach(element => {
   
    if(element != 0) {
     arr[count++] = element;

    }
});
return arr;
}

let values = [0, 4, 2, 0, 5, 0];

console.log(result(values))