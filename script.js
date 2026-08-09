let currentPage = 0;
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

function zoomIn() {
}

function zoomOut() {
}

function resetZoom() {
}

goToPage(1);
