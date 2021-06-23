var btntranslate = document.querySelector("#bt-translate");
var txtarea = document.querySelector("#txtarea");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function gettranslationalurl(text){
    return serverURL + "?"+  "text=" + text
}
function errorhandler(error){
    console.log("error occuerd",error)
    alert("somthing wroung with server")
}
function clickEventHandler(){
 //   outputdiv.innerText=  "translated"   +    txtarea.value;
var inputText = txtarea.Value;

 fetch(gettranslationalurl(inputText))
 .then(Response => Response.json())
 .then(json => {
     var translatedText = json.content.translated;
     outputdiv.innerText = translatedText;
 })
.catch(errorhandler)
   
};
btntranslate.addEventListener("click",clickEventHandler)





