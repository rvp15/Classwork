function findShort(s){
    let shorestWord="";
    let arr=[];
    let wordListArray = s.split(' ');
    // console.log(wordListArray)
   for(let i=0;i<wordListArray.length;i++){
    if(wordListArray[i].length<=shorestWord.length || !(shorestWord)){ //check if length of word is less then length of shortest word || if there is no word
        shorestWord=wordListArray[i]  //shorest word is current word
        if(arr.length){  // first time arr.length is zero so it goes and push word into arr ,next time the word length in arr is greated then shortest word it empty the arr
            if(arr[0].length>shorestWord.length){
                arr=[]
            }
        }
        arr.push(shorestWord)
    }
     }
    console.log(arr) 
};
  
findShort('bitcoin take over the world maybe who knows perhaps')

// Exercise : Mixup
//  x=acb
let y;
function switcheroo(x){
    let a=x.slice(0,1) //a=a
    let b=x.slice(1,2)//b=c
    let c=x.slice(2,x.length) //c=b
    let switched = c + b + a;
    console.log(switched)
}
switcheroo('acb');