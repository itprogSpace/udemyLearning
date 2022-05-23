// a href replacement 

function scrolling(nameIdToScroll){
    window.scrollTo({
        top: document.getElementById(nameIdToScroll).offsetTop,
        behavior: "smooth"
    });
}