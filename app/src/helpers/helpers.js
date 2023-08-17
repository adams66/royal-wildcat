export function themeInit(){
    var getTheme = localStorage.getItem("theme");

if(getTheme == null){

  localStorage.setItem("theme", "undecided");
  localStorage.setItem("theme-color", "undecided");

};

}


export function windowReset(){
    window.scrollTo(0,0);
};




