var search=document.getElementById("index")
var content=document.querySelector(".content")
var plist= content.querySelectorAll("p")
console.log(plist)

search.addEventListener("keyup",function(){
    var enter=event.target.value.toUpperCase()
    for(count=1;count<plist.length;count=count+1)
    {
        if(plist[count].textContent.toUpperCase().indexOf(enter)<0)
        {
            plist[count].style.display="none"
        }
        else{
            plist[count].style.display="block"
        }
    }
})