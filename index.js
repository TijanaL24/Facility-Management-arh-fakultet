
// full div service preview
const closeModalBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector('body');
let currentLongDescription = null;

document.querySelectorAll('.read-more').forEach(function (element) {
    element.addEventListener('click', function () {
        const longDescription = this.parentElement.nextElementSibling;

        longDescription.classList.toggle('hidden');
        overlay.classList.toggle("hidden");
        body.classList.toggle('fixed-position');

        currentLongDescription = longDescription;
    });
});

document.querySelectorAll('.btn-close').forEach(function (element) {
    element.addEventListener('click', function () {
        const longDescription = this.parentElement;

        longDescription.classList.toggle('hidden');
        overlay.classList.add("hidden");
        body.classList.toggle('fixed-position');

        currentLongDescription = null;
    });
});

const closeModal = function () {
    if (currentLongDescription) {
        currentLongDescription.classList.toggle('hidden');
        overlay.classList.add("hidden");
        body.classList.toggle('fixed-position');

        currentLongDescription = null;
    }
};

// close the modal when the close button and overlay is clicked
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}
if (overlay) {
    overlay.addEventListener("click", closeModal);
}


// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !currentLongDescription.classList.contains("hidden")) {
        closeModal();
    }
});

