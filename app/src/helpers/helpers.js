export function windowReset(){
    window.scrollTo(0,0);
};

export function themeColor(key,themePart){
    var getTheme = localStorage.getItem("theme");

    if(getTheme in key.theme){
        console.log("This theme exists");


        switch(themePart){
        case "backgroundColor":
        return key.theme[getTheme].background; 
        case "buttons":
        return key.theme[getTheme].buttons;    
        case "cards":
        return key.theme[getTheme].cards;    
        case "shadow":
        return key.theme[getTheme].shadow;
        default:
        return "yellow";    
        }




    }



    else{
        console.log("No theme found");
    }
    




  

}