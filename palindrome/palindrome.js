function isPalidrome(word){
    word = word.toLowerCase() // Different from Python
    console.log(word)

    for(let i = 0; i < word.length/2; i++){
        if (word[i]!=word[word.length -1-i]){
            return false
        }
        
    }
    return true

}

word = "Anna"
console.log(isPalidrome("Anna"))
 