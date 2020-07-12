


function UTF8_Encoding(text){
    const encoder = new TextEncoder('utf8');
    const view = encoder.encode(text);
    return Array.from(view);
}

// Testing
var ret = UTF8_Encoding('我叫daisy');
console.log(ret);














