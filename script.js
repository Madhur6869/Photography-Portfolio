/*document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader-wrapper").style.visibility = "visible";
        console.log("Loading"); 
    } else { 
        document.querySelector(".loader-wrapper").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible";
        console.log("Loaded"); 
    } 
}; */
function redirect(name) {
    console.log(name);
    var url = "Snippets/"+ name +"/"+ name +".html";
    console.log(url);
    window.location.href=url;
}
