//login functionality
document.getElementById("loginButton").addEventListener("click", function(e) {
    // ata dile bar bar reload hoibo na
    e.preventDefault()
    const DefaultMobileNumber = 123456789
    const DefaultPin = 1234
    
    const mobileNumberValue = document.getElementById
    ("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

   

    if(mobileNumberValueConverted ===DefaultMobileNumber && pinNumberValueConverted === DefaultPin){
        window.location.href="home.html"
    }else{
       alert("Wrong Username and password")
    }
});
    