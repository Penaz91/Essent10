function openLightbox(imgUrl){
    var img = document.getElementById("lightboximg");
    var lb = document.getElementById("lightboxBG");
    img.src = imgUrl;
    lb.style.display = "block";
    return false;
}

function closeLightbox(){
    var lb = document.getElementById("lightboxBG");
    lb.style.display = "none";
}

function prepareLightbox(){
    var lbclose = document.getElementById("lightboxClose");
    lbclose.onclick = function(){closeLightbox();};
    var lbbg = document.getElementById("lightbox");
    lbbg.onclick = function(){closeLightbox();};
}

document.addEventListener("DOMContentLoaded", function(){
    var lightboxedimgs = document.getElementsByClassName("lightboximg");
        if (lightboxedimgs.length != 0){
            prepareLightbox();
            for (const image of lightboxedimgs) {
                image.addEventListener("click", function(evt){
                    evt.preventDefault();
                    openLightbox(image.getAttribute("href"));
                    return false;
                });
            }
        }
});
