function reverse(myList){
    for (let i =0; i< myList.length /2; i++){
        // myList[i], myList[myList.length - 1 -i] = myList[myList.length - 1 -i], myList[i] -> JS does not support tuple unpacking or similtaneous assignment as in Python
        temp = myList[i]
        myList[i] = myList[myList.length - 1 -i]
        myList[myList.length - 1 -i] = temp
    }
    return myList
}

list = [1,2,3,4,5,6]
console.log(list)
console.log(reverse(list))