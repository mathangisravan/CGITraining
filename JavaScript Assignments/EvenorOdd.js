// Create a function to check elements in array are even or odd
function EvenOdd(arr){
    evenarr = [];
    oddarr = [];
    for( i = 0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            evenarr.push(arr[i]);
        }
        else{
            oddarr.push(arr[i]);
        }
    }
    for(let val1 of evenarr){
        console.log(` Even values: ${val1}`);
    }
    for(let val2 of oddarr){
        console.log(`Odd values: ${val2}`);
    }
}
 arr = [1,2,3,4,5,6,7,8,9,10];
 EvenOdd(arr);

