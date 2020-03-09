    alert("Bienvenue sur mon CV en ligne ! 🤗\n\nDéveloppé en HTML5, CSS3, JavaScript et jQuery, \nvia l'éditeur Visual Studio Code, et déployé sur GitHub. \n\nBonne lecture ! \nCyrielle");

    $(document).ready(function(){
    
        $("#content-slide").hide();
    
        $(".open").click(function() {
    
            if($("#content-slide").is(":visible")){
    
                $("#content-slide").slideUp();
                $(".open").text("Mes infos (contact)");
        
                } else {

                    $("#content-slide").slideDown();
                    $(".open").text("Mes infos (contact)");
        
                };

        return false;
            
        });
    
    });