// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];

// we expect to get back...

["e", "d", "c", "b", "a"];

// USE THE FOR LOOP SET UP FROM YESTERDAY
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

// AND THE SWAPPING TRICK WE LEARNED TODAY
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

// HERE IS YOUR STARTER CODE:
function reverse(arr){
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        var temp = arr[left]; 
        arr[left] = arr[right] ;
        arr{right} = temp;
    }
    return arr
}
console.log(reverse(['a', 'b', 'c', 'd', 'e']))

 