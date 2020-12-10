var counter = 0; 
function countdown(){
    var count = document.querySelector("#number");
var countPositon  = count.getBoundingClientRect().top;
var screenPositon = window.innerHeight / 1.2 ;
if(countPositon < screenPositon)
{ 
    setInterval(function(){
       {
        if(counter < 500){
        count.textContent = ++ counter ;
        }
    
        }

    }, 100);
}
} 
window.addEventListener("scroll",countdown);

function TextAppear()
{
    var text = document.querySelector(".textcontent");
    var textPositon = text.getBoundingClientRect().top;
    var screenPositonn = window.innerHeight/1.8;

    if(textPositon < screenPositonn)
    text.classList.add("newtextcontent");
}


window.addEventListener("scroll",TextAppear);


function PictAppear()
{
    var pics = document.querySelector(".pics");
    var PicPositon = pics.getBoundingClientRect().top;
    var screenPositonnn = window.innerHeight/1.8;

    if(PicPositon < screenPositonnn)
    pics.classList.add("newpics");
}


window.addEventListener("scroll",PictAppear);