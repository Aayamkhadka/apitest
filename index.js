

function nepal(add){
    console.warn(add(10,20));
}

nepal(function(a,b){
    return a+b;
});