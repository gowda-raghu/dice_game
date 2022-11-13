// var rnum1=Math.floor(Math.random()*6+1)
var rnum1=Number(prompt("You are the Player1...! Enter a number from 1-6..!"));
var rnum2=Math.floor(Math.random()*6+1)

function change_pic(num,img){
if (num===1){
  document.querySelector("img."+img).setAttribute('src','images/dice1.png')
}
else if (num===2){
  document.querySelector("img."+img).setAttribute('src','images/dice2.png')
}
else if (num===3)
{
  document.querySelector("img."+img).setAttribute('src',"images/dice3.png")
}
else if (num===4)
{
  document.querySelector("img."+img).setAttribute('src',"images/dice4.png")
}
else if (num===5)
{
  document.querySelector("img."+img).setAttribute('src',"images/dice5.png")
}
else if (num===6)
{
  document.querySelector("img."+img).setAttribute('src',"images/dice6.png")
}
else{
  document.querySelector("h1").innerHTML="Select a number between 1-6..!";
}
}

change_pic(rnum1,"img1")
change_pic(rnum2,"img2")

if (rnum1===rnum2)
{
document.querySelector("h1").innerHTML="Draw";
}

if (rnum1>rnum2)
{
document.querySelector("h1").innerHTML="🚩Player1 Wins";
}

if (rnum1<rnum2)
{
document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
