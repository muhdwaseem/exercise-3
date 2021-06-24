var btntranslate = document.querySelector("#bt-translate");
var txtarea = document.querySelector("#txtarea");
var outputdiv = document.querySelector("#output");

var serverURL ="	https://api.funtranslations.com/translate/minion.json"


function gettranslationalurl(text){
    return serverURL + "?"+  "text=" + text
}
function errorhandler(error){
    console.log("error occuerd",error);
    alert("somthing wrong with server try again after some tiime")
}

function clickEventHandler(){
 
var inputText = txtarea.Value;

 fetch(gettranslationalurl(inputText))
 .then(Response => Response.json())
 .then(json =>  {
     var translatedtext = json.contents.translated;
     outputdiv.innerText = translatedtext;
 }
 )
 .catch(errorhandler)

   
}
btntranslate.addEventListener("click",clickEventHandler)





