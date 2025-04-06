document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); 
    const navLinks = document.querySelector(".links");

    menuToggle.addEventListener("click", function () {
        console.log("✅ BUTTON CLICKED!"); // Confirm button is clicked

        if (navLinks) {
            navLinks.classList.toggle("active"); 
            console.log("Class 'active' applied?", navLinks.classList.contains("active")); 
        } else {
            console.error("❌ navLinks not found!");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const enquireButton = document.getElementById("enquire-button");
    const enquiryFormOverlay = document.getElementById("enquiry-form-overlay");
    const cancelButton = document.getElementById("cancel-button");
    const enquiryForm = document.getElementById("enquiry-form");
    const successMessage = document.getElementById("success-message");
    const vehicleTypeSelect = document.getElementById("vehicleType");
    const vehicleNameSelect = document.getElementById("vehicleName");

    const bikeNames = ["VBK Phantom 200", "VBK Phantom 400", "VBK Viper 900", "VBK Falcon 400", "VBK Blaze 600", "VBK Shadow 1000"];
    const carNames = ["VBK Venom GT", "VBK Raptor", "VBK Phantom", "VBK Striker"];

    function populateVehicleNames(type) {
        while (vehicleNameSelect.options.length > 0) {
            vehicleNameSelect.remove(0);
        }

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select Vehicle";
        vehicleNameSelect.appendChild(defaultOption);

        const names = type === "bike" ? bikeNames : (type === "car" ? carNames : []);
        names.forEach(name => {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            vehicleNameSelect.appendChild(option);
        });
    }

    enquireButton.addEventListener("click", function () {
        enquiryFormOverlay.style.display = "flex";
    });

    cancelButton.addEventListener("click", function () {
        enquiryFormOverlay.style.display = "none";
        successMessage.textContent = "";
        enquiryForm.reset();
    });

    vehicleTypeSelect.addEventListener("change", function () {
        populateVehicleNames(this.value);
    });

    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();
        successMessage.textContent = "Submitted successfully!";
        enquiryForm.reset();
        setTimeout(function () {
            enquiryFormOverlay.style.display = "none";
            successMessage.textContent = "";
        }, 3000);
    });
});