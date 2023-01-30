

    var randomNumber=Math.floor((Math.random()*6)+1);
    var randomimage="dice"+randomNumber+".png";//dice1.png-dice2.png
    var randomSource="images/"+randomimage;
    var images=document.querySelectorAll("img")[0];
    images.setAttribute("src",randomSource);
    
    
    
    
    var randomNumber2=Math.floor((Math.random()*6)+1);
    var randomimage2="dice"+randomNumber2+".png";//dice1.png-dice2.png
    var randomSource2="images/"+randomimage2;
    var images2=document.querySelectorAll("img")[1];
    images2.setAttribute("src",randomSource2);
   

    for(i=0;i<=1;i++)
{
    if(randomSource>randomSource2)
    {
        document.querySelector("h1").innerHTML="PLAYER 1 WINS";
    }
    else if(randomSource<randomSource2)
    {
        document.querySelector("h1").innerHTML="PLAYER 2 WINS";
    }
    else
    {
        document.querySelector("h1").innerHTML="DRAW";
    }
}
 