// ###========================================================== Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
function findSmallestFriend(arr){
    let smallestFriend = arr[0];
    for(const name of arr){
        if(name.length < smallestFriend.length){
            smallestFriend = name;
        }
    }
    return smallestFriend;
}


const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(findSmallestFriend(heights))