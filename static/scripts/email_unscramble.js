function RevROT13(str){
    let rev = str.split("").reverse().join("");
    let rot = rev.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    return rot;
}

function reversehref(href){
    let x = href.split("mailto:")[1];
    let email = RevROT13(x);
    return `mailto:${email}`;
}

document.addEventListener("DOMContentLoaded", function(){
    // Replace all placeholders with either mail or links
    let objects = document.getElementsByClassName("unscramble");
    for (const obj of objects) {
        if (obj.hasAttribute("href")){
            obj.setAttribute("href", reversehref(obj.getAttribute("href")));
        }
        if (obj.classList.contains("unscramble_text")){
            obj.innerHTML = RevROT13(obj.innerHTML);
        }
    }
});
