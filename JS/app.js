console.log("Connected");
const switchBtnToggler = document.getElementById("switch-btn-toggler")



//event handler :

switchBtnToggler.addEventListener("click", function(){
    var root = document.querySelector(":root");
    var rootStyle = getComputedStyle(root);
    const isWhite = rootStyle.getPropertyValue('--theme-bg');
    console.log("isWhite");
    if(isWhite == "#E2E0E1" ){
        root.style.setProperty('--theme-bg','#3e3939');
    } else {
    root.style.setProperty('--theme-bg', '#E2E0E1');
    }
}) ;

