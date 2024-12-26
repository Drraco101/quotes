let arrayOfData=[
  {name:"― Oscar Wilde", quote:" “Be yourself; everyone else is already taken.”"},
  {name:"― Marilyn Monroe", quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"},
  {name:"― Frank Zappa", quote:"“So many books, so little time.”"},
  {name:"― Albert Einstein", quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"},
  {name:"― Marcus Tullius Cicero", quote:"“A room without books is like a body without a soul.”"},
  {name:"― Bernard M. Baruch", quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"},
  {name:"― William W. Purkey", quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”"},
  {name:"― Dr. Seuss", quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"},
  {name:"― Mae West", quote:"“You only live once, but if you do it right, once is enough.” "},
  {name:"― Albert Camus", quote:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend”"}
]

var random;
var lastRandom;
var previous;
function generateQuote(){
  console.log(random);
  console.log(previous);
  console.log(lastRandom);
  previous=lastRandom;
  do{
      random = Math.floor(Math.random() * arrayOfData.length);
  }while(random===lastRandom)
  lastRandom=random;
  document.getElementById("quote").innerHTML=`${arrayOfData[random].quote}`;
  document.getElementById("author").innerHTML=`${arrayOfData[random].name}`;
}
function generatePrevious(){
    console.log(previous);
  if(previous==null){
    alert("no previous generate a quote first")
  }
  document.getElementById("quote").innerHTML=`${arrayOfData[previous].quote}`;
  document.getElementById("author").innerHTML=`${arrayOfData[previous].name}`;
}
function reset(){
  document.getElementById("quote").innerHTML="Your Quote will Appear here....";
  document.getElementById("author").innerHTML="click to Appear";
}