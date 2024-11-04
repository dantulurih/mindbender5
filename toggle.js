ßdocument.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.wp-block-button__link');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('selected');
        });
    });
});
