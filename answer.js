let students = [];

let form = document.getElementById("studentForm");
let output = document.getElementById("output");
let studentList = document.getElementById("studentList");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let ageError = document.getElementById("ageError");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showStudents() {
    studentList.innerHTML = "";

    if (students.length === 0) {
        studentList.innerHTML = "<li>No students registered yet.</li>";
        return;
    }

    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        studentList.innerHTML += `<li>${s.name} - ${s.email} - ${s.age}</li>`;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.innerText = "";
    emailError.innerText = "";
    ageError.innerText = "";
    output.innerText = "";

    let name = nameInput.value.trim().toUpperCase();
    let email = emailInput.value.trim();
    let age = ageInput.value.trim();

    let hasError = false;

    if (name === "") {
        nameError.innerText = "Name is required";
        nameError.style.color = "red";
        hasError = true;
    } else if (name.length < 2) {
        nameError.innerText = "Name must be at least 2 characters";
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
    }

    if (age === "") {
        ageError.innerText = "Age is required";
        ageError.style.color = "red";
        hasError = true;
    } else if (Number(age) < 18) {
        ageError.innerText = "Age must be 18 or above";
        ageError.style.color = "red";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    students.push({
        name: name,
        email: email,
        age: age
    });

    showStudents();
    output.innerText = name + " - " + email + " - " + age;
    output.style.color = "green";

    form.reset();
});

showStudents();
