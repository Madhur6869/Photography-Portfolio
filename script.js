function redirect(name) {
    console.log(name);
    var url = "Snippets/"+ name +"/"+ name +".html";
    console.log(url);
    window.location.href=url;
}
