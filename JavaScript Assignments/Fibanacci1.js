//Fibanacci series using array
function fibanacciarr(num){
    arr = [0,1];
    for(i = 0;i<num-1;i++){
        a = arr[i] + arr[i+1];
        arr.push(a);
    }
    for(i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function fibanacci(num){
    a = 0;
    b = 1;
    if( num == 1){
        print(a)
    }
    else{
        print(a);
        print(b);
        for(i = 0;i<num; i++){
            c = a +b;
            a = b;
            b = c;
            print(c)
        }
    }
}

