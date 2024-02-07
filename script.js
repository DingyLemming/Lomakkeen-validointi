document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const errors = [];

        formData.forEach((value, key) => {
            if (!value.trim()) {
                errors.push(`Täytä kenttä: ${key}`);
            }
        });

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert("Rekisteröinti onnistui!");
        form.reset(); // Optionally reset the form after successful submission
    });
});
