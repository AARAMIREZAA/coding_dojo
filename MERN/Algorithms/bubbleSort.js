const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function bubbleSort(nums) {
    for(var i = 0; i < nums.length;i++){
        var swapped = false;
        
        for(var j = 0; j < nums.length - i;j++){
            if(nums[j] > nums[j+1]){
                swapped = true
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }

        }
        if(swapped = false){
            return nums
        }
    } 
    return nums
}
console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))