/*
function print1To255(){
    for (var i =1; i < 256; i++){
        console.log(i)
    }
}
print1To255();

//
function print1To255(){
    for (var i =1; i < 256; i+=2){
        console.log(i)
    }
}
print1To255();
//

function printIntsAndSum0To255(){
    var sumSoFar = 0;
    for(var i = 0; i <=255; i++){
        sumSoFar = sumSoFar + i;
        console.log(i)
    }
}
printIntsAndSum0To255();

//

function printArrayVals(arr){
    for(var i = 0; i < arr.length; i++)
    console.log(arr[i])
}
var arr1 = [1,2,3,4]
var arr2 = []
var arr3 = ['green']
var arr4 = ['c','t','h']

printArrayVals(arr1);
printArrayVals(arr2);
printArrayVals(arr3);
printArrayVals(arr4);


function printMaxofArray(arr){
    var max = arr[0]
    for(var i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
printMaxofArray([4,0,1,8,7,9,20,24])


function printAverageofArray(arr){
    var sum = arr[0];
    for(var i=1; i < arr.length; i++){
        sum = sum+arr[i];

    }
    console.log(sum / arr.length)
}
printAverageofArray([1,2,3,4])


function returnOddsArray1To255(){
    var oddsArr = [];
    for (var i = 1; i <=255; i +=2){
        oddsArr.push(i)
    }
    return oddsArr;
}
console.log(returnOddsArray1To255());


function returnArrayCountGreaterThanY(arr, y){
    var greaterThan = 0
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            greaterThan = greaterThan + 1
        }
    }
    console.log(greaterThan);
}
var arr =[1,6,7,5,8,10]

returnArrayCountGreaterThanY(arr, 1);
*/ 

function zeroOutArrayNegativeVals(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        
        }
    }
    console.log(arr);
}        
var arr = [-1,2,-6,8,-7]
zeroOutArrayNegativeVals(arr)