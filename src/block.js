const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelector(".thumbnails-anchor");
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-image");

}

for (let i=0; i<anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function() {
        setDetails(anchorElements[i]);
    } )

}
