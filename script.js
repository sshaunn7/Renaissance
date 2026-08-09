let currentPage = 0;
let zoomLevel = 1;
const totalPages = 7;
const timeline = document.getElementById("timeline");
const pageNumber = document.getElementById("pageNumber");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

function goToPage(pageNumberToShow) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });
  
    pages[pageNumberToShow - 1].classList.add("active");
    currentPage = pageNumberToShow - 1;
  
    updatePageNumber();
    updateButtons();
    resetZoom();
}

function nextPage() {
    if (currentPage === totalPages - 1) {
        goToPage(1);
        return;
    }
  
    goToPage(currentPage + 2);
}

function previousPage() {
    if (currentPage === 0) {
        return;
    }
  
    goToPage(currentPage);
}

function updatePageNumber() {
    pageNumber.textContent =
        (currentPage + 1) + " / " + totalPages;
}

function updateButtons() {
    backButton.disabled = (currentPage === 0);
    if (currentPage === totalPages - 1) {
        nextButton.textContent = "Loop to Home →";
    } else {
        nextButton.textContent = "Forward →";
    }
}

function zoomIn() {
    zoomLevel = zoomLevel + 0.1;
    if (zoomLevel > 1.5) {
        zoomLevel = 1.5;
    }
    
    applyZoom();
}

function zoomOut() 
    zoomLevel = zoomLevel - 0.1;
    if (zoomLevel < 0.7) {
        zoomLevel = 0.7;
    }

    applyZoom();
}

function applyZoom() {
    timeline.style.transform = "scale(" + zoomLevel + ")";
}

function resetZoom() {
    zoomLevel = 1;
    applyZoom();
}

goToPage(1);
