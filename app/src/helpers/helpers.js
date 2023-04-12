export function windowReset(){
    window.scrollTo(0,0);
};

export function themeColor(key,themePart){
    var getTheme = localStorage.getItem("theme");

    if(getTheme in key.theme){
        console.log("This theme exists");


        switch(themePart){
        case "color":
        return key.theme[getTheme].color; 
        case "backgroundColor":
        return key.theme[getTheme].background; 
        case "buttons":
        return key.theme[getTheme].buttons;    
        case "cards":
        return key.theme[getTheme].cards;    
        case "shadow":
        return key.theme[getTheme].shadow;
        case "nav":
        return key.theme[getTheme].nav;
        case "sidebar":
        return key.theme[getTheme].sidebar;    
        case "neon":
        return key.theme[getTheme].neon;       
        case "reset":
        return key.theme[getTheme].reset;
        case "paragraph":
        return key.theme[getTheme].paragraph;         
        default:

        return "yellow";    
        }




    }



    else{
        console.log("No theme found");
    }
    




  

}