const switchBtnToggler = document.getElementById("switch-btn-toggler")
const generateOtpCode = document.getElementById("generate-otp-code")
const otpInputList = document.getElementById("otp-input-list")



function displayOtp(){
    generateOtpCode.innerHTML = `
    <div>Your OTP code 3209</div>
    <button class="btn">reset</button>
    <div>expires in 0s</div>  `
}

const checkOtp = (e) => {
  const currentElement = e.target;
  const currentValue = e.target.value;
  const nextChild = currentElement.nextElementSibling;

  // Forward to next childm:]
  if (nextChild){
    nextChild.focus();

  }

    
    console.log(nextChild)
}


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

otpInputList.addEventListener("input", checkOtp);

setTimeout( displayOtp,1000)
