export function themeInit(){
    var getTheme = localStorage.getItem("theme");

if(getTheme == null){

  localStorage.setItem("theme", "undecided");


};

}


export function windowReset(){
    window.scrollTo(0,0);
};




