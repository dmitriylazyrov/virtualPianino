
    function a(event){
    console.log("The '" +event.key+"' key is pressed.");
}
    document.addEventListener("keydown",function(event){
    if(event.key == "A") a(event);
    if(event.key == "a") a(event);
    if(event.key == "S") a(event);
    if(event.key == "s") a(event);
    if(event.key == "D") a(event);
    if(event.key == "d") a(event);
    if(event.key == "F") a(event);
    if(event.key == "f") a(event);
    if(event.key == "G") a(event);
    if(event.key == "g") a(event);
    if(event.key == "H") a(event);
    if(event.key == "h") a(event);
    if(event.key == "J") a(event);
    if(event.key == "j") a(event);
    else {
    console.log("UH..OH! Unexpected key pressed")
}
});
