(function(){
    var header = document.getElementById("header");
    var menuToogle = document.getElementById("icono-menu");
    
    menuToogle.addEventListener("click",function(){
        if(header.className === "abierto"){
            header.className="";
        }else{
            header.className="abierto";
        }
        
    })
    
})();