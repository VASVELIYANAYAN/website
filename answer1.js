let customers = [];

let form = document.getElementById("customerForm");
let output = document.getElementById("output");
let customerList = document.getElementById("customerList");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showCustomers() {
    customerList.innerHTML = "";

    if (customers.length === 0) {
        customerList.innerHTML = "<li>No customers registered yet.</li>";
        return;
    }

    for (let i = 0; i < customers.length; i++) {
        customerList.innerHTML += `<li>${customers[i].name} - ${customers[i].email}</li>`;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.innerText = "";
    emailError.innerText = "";
    output.innerText = "";

    let name = nameInput.value.trim();
    let email = emailInput.value.trim().toLowerCase();

    let hasError = false;

    if (name === "") {
        nameError.innerText = "Name is required";
        nameError.style.color = "red";
        hasError = true;
    }

    if (email === "") {
        emailError.innerText = "Email is required";
        emailError.style.color = "red";
        hasError = true;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Enter valid email";
        emailError.style.color = "red";
        hasError = true;
    } else if (!email.includes("gmail.com")) {
        emailError.innerText = "Only gmail.com email is allowed";
        emailError.style.color = "red";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    customers.push({
        name: name,
        email: email
    });

    showCustomers();
    output.innerText = "Customer registered successfully!";
    output.style.color = "green";
    form.reset();
});

showCustomers();
