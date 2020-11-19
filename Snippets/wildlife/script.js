(document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader").style.visibility = "visible";
        console.log("Loading"); 
    } else { 
        document.querySelector(".loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible";
        document.querySelector(".loader").style.visibility = "hidden";
        console.log("Loaded"); 
    } 
}) 