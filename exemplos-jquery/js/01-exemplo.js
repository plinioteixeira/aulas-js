// Acessando elementos usando jQuery
const titulo = $("h1")

//Mudar o texto do elemento
titulo.text("Olá jQuery")

// CSS via jQuery
//titulo.css("color", "blue")
titulo.css({
    "color" : "blue",
    "text-aling" : "center",
    "font-size" : "1.6rem"
})

titulo.on("click", function(){
    $("body").css("background-color", "yellow");
    $("h2").text("Clicou!!")

    titulo.fadeOut()
})
/* titulo.on("dblclick", function(){
    $("body").css("background-color", "white");
    $("h2").text("A mais famosa biblioteca JS") */
})