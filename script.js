    alert("Bienvenue sur mon CV en ligne ! 🤓\n\nDéveloppé en HTML5, CSS3, JavaScript et jQuery, \nvia l'éditeur Visual Studio Code, et déployé sur GitHub. \n\nBonne lecture ! \nCyrielle");

    $(document).ready(function(){ /*Infos*/
    
        $("#content-slide").hide();
    
        $(".open").click(function() {
    
            if($("#content-slide").is(":visible")){
    
                $("#content-slide").slideUp();
                $(".open").text("Mes informations 📲");
        
                } else {

                    $("#content-slide").slideDown();
                    $(".open").text("Mes informations 📲");
        
                };

        return false;
            
        });
    
    });

    $(document).ready(function(){ /*Formations*/
    
        $("#content-education").hide();
    
        $(".open2").click(function() {
    
            if($("#content-education").is(":visible")){
    
                $("#content-education").slideUp();
                $(".open2").text("⬇︎ FORMATIONS ⬇︎");
        
                } else {

                    $("#content-education").slideDown();
                    $(".open2").text("⬆︎ FORMATIONS ⬆︎");
        
                };

        return false;
            
        });
    
    });

    $(document).ready(function(){ /*Technologies*/
    
        $("#content-technologies").hide();
    
        $(".open3").click(function() {
    
            if($("#content-technologies").is(":visible")){
    
                $("#content-technologies").slideUp();
                $(".open3").text("⬇︎ TECHNOLOGIES ⬇︎");
        
                } else {

                    $("#content-technologies").slideDown();
                    $(".open3").text("⬆︎ TECHNOLOGIES ⬆︎");
        
                };

        return false;
            
        });
    
    });

    $(document).ready(function(){ /*Experiences*/
    
        $("#content-experiences").hide();
    
        $(".open4").click(function() {
    
            if($("#content-experiences").is(":visible")){
    
                $("#content-experiences").slideUp();
                $(".open4").text("⬇︎ EXPÉRIENCES ⬇︎");
        
                } else {

                    $("#content-experiences").slideDown();
                    $(".open4").text("⬆︎ EXPÉRIENCES ⬆︎");
        
                };

        return false;
            
        });
    
    });

    $(document).ready(function(){ /*Qualities*/
    
        $("#content-qualities").hide();
    
        $(".open5").click(function() {
    
            if($("#content-qualities").is(":visible")){
    
                $("#content-qualities").slideUp();
                $(".open5").text("⬇︎ COMPÉTENCES PERSONNELLES ⬇︎");
        
                } else {

                    $("#content-qualities").slideDown();
                    $(".open5").text("⬆︎ COMPÉTENCES PERSONNELLES ⬆︎");
        
                };

        return false;
            
        });
    
    });

   