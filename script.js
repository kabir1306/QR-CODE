var qr_btn = document.querySelector("#Qr-btn");
var qr_img = document.querySelector("#Qr-img");
var loader = document.querySelector("#loading");

qr_btn.addEventListener("click", () => {

    loader.style.display = "block"
    qr_img.onload = function() {
        loader.style.display= "none";
    }


    var input=document.querySelector("#input").value;
    var ApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`;
    qr_img.src=ApiUrl;
});
