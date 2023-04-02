
function handleSubmit(event) {
        event.preventDefault(); 
        const successAlert = document.getElementById("success-alert");
        successAlert.classList.remove("d-none");
        setTimeout(() => {
            successAlert.classList.add("d-none");
        }, 3000);
    }
document.querySelector("form").addEventListener("submit", handleSubmit);

