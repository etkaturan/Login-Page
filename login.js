function login() {
    
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let dogruKullaniciAdi = "Etka";
    let dogruSifre = "password";

    if (userName === dogruKullaniciAdi && password === dogruSifre) {
        window.location.href = "main.html"
    }
    else if (userName === "") {
        alert("Enter Username Please!")
    }
    else if (password === "") {
        alert("Enter Password Please!")
    }
    else if (userName === "Admin") {
        alert("Welcome Admin!")
    }
    else {
        alert("Try Again!")
    }

}



