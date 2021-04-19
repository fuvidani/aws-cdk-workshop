
const authorForm = document.getElementById("author-form");
authorForm.onsubmit = (event) => {
    event.preventDefault();
    const authorInput = document.getElementById("author-input");

    window.location.href = `${window.location.href.split('?')[0]}greeting?name=${authorInput.value}`;
}
