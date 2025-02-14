
var result = document.getElementById("result");

var buttons = Array.from(document.getElementsByClassName("button"));
buttons.forEach(buttons => {
    buttons.onclick=function(e){
        switch (e.target.innerText) {
            case "C":
                result.innerHTML = "";
                break;
            case "CE":
                if (result.innerText) {
                    result.innerHTML = result.innerText.slice(0, -1)
                }
                break;
            case "=":
                try {
                    result.innerHTML = eval(result.innerText)
                }
                catch {
                    result.innerText = "entrez les nombres exacte"
                }
                break;
            case "sqrt(":
                result.innerHTML = Math.sqrt(result.innerText)
                break;
            case "cos(":
                result.innerHTML = Math.cos(result.innerText)
                break;
            case "sin(":
                result.innerHTML = Math.sin(result.innerText)
                break;
            case "tan(":
                result.innerHTML = Math.tan(result.innerText)
                break;
            case "Dark":
                result.innerHTML = "";
                break;
            case "White":
                result.innerHTML = "";
                break;
            default:
                result.innerText += e.target.innerText;
        }
    };
});
var sun = document.getElementById("sun")
sun.addEventListener("click", dark)
var bool = false;
function dark(e) {
    
    if (bool === false) {
        document.getElementById("body").style.backgroundColor = "#3F4A57";
        document.getElementById("cont").style.backgroundImage = "linear-gradient(#207DBE,#3F4A57)";
        document.getElementById("cont").style.boxShadow = "0px 0px 50pxrgb(168, 179, 187)";
        bool = true;
        sun.innerHTML = "White"
    }
    else {
        document.getElementById("body").style.backgroundColor = "#7889EF";
        document.getElementById("cont").style.backgroundImage = "linear-gradient(#EDF4FC,#6666FF)";
        document.getElementById("cont").style.boxShadow = "2px 1px 30pxrgb(177, 170, 209)";
        sun.innerHTML = "Dark"
        bool = false;

    }
}