//write the javascript program to get the extension of a filename;

// function getFileExtension(str){
//     return str.slice(str.lastIndexOf('.'))
// }
// console.log(getFileExtension("index.html"))

// another way 
//=============================
function getFileExtension(str){
    result = str.slice(str.lastIndexOf('.'));
    return result;
}
console.log(getFileExtension('in.dex.jsx'));
