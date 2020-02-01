var timesclicked=1;
function hamburger(x){
x.classList.toggle("change");
timesclicked++;
if(timesclicked%2==0)
{
     document.getElementById("myNav").style.display="block";
}
else{
    document.getElementById("myNav").style.display="none";
}
}  