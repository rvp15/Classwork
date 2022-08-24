
// function breakingRecords(scores) {
//     // Write your code here
//     let min=scores[0]
//     let max=scores[0]

//     let minScoreCount=0
//     let maxScoreCount=0
//     for(const eachScore of scores){
//         if(eachScore>max){
//             max =eachScore
//             maxScoreCount++
//         }else if(eachScore<min){
//             min=eachScore
//             minScoreCount++
//         }
//     }
//     return [maxScoreCount, minScoreCount]

// }

// console.log(breakingRecords([5,10,25,15,4,26]))
// Exercise 2:
function pageCount(n, p) {
    // Write your code here
    let count = 0
    const bookHalf = Math.floor(n/2) 
    const pageDiff = n - p
    if(p == bookHalf){
// if page is at the center of the book
        count = Math.floor(bookHalf/2)
    }else if(p < bookHalf){
// if page is closer to the front
        count = Math.floor(p / 2)
    } else if(pageDiff == 1 && n%2 == 0){
// if page is at the end and last page number is even
        count = Math.ceil(pageDiff / 2)
    } else if(pageDiff == 1 && n%2 !== 0){
// if page is at the end and last page number is odd
        count = Math.floor(pageDiff / 2)
    }
    else {
// if page is closer to the end
        count = Math.floor(pageDiff / 2)
    }
    return count
}

console.log(pageCount(10,8))
