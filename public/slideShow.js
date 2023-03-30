let slideIndex = 0;
showSlides();

async function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        document.getElementById('timeline' + (slideIndex - 1).toString()).style.opacity = "0";
        document.getElementById('timeline' + (slideIndex - 1).toString()).style.width = "0%";
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    document.getElementById('timeline' + slideIndex).style.opacity = "1";
    document.getElementById('timeline' + slideIndex).style.width = "100%";
    if (slideIndex != 1) {
        document.getElementById('timeline' + (slideIndex - 1).toString()).style.width = "0%";
        document.getElementById('timeline' + (slideIndex - 1).toString()).style.opacity = "0";
    }
    // change tip every 5 seconds
    setTimeout(showSlides, 5000); 
}