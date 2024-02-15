function transformToZero(value){
for (const key in value) {
   for(const item of value[key]){
    if(item == 0){
      value[key].fill(0)
    
    }}
}
return value;
}

module.exports = {transformToZero};

