const formData = {
    email: "",
    message: ""
};
const localStorageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
loadSavedForm();
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
});


function loadSavedForm() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}