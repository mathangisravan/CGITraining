function CountVowel(word){
    //Changing all words in a string to lower case
    word = word.toLowerCase();
    let count = 0;
    for(let i = 0;i<word.length; i++){
        let ans = word[i];
        if( ans == 'a' || ans == 'e' || ans == 'i' || ans == 'o' ||ans == 'u'){
            count +=1;
        }
    }
    return count;
}
word1 = "Hello world";
console.log(CountVowel(word1));