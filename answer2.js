let students = [];

let form = document.getElementById("studentForm");
let output = document.getElementById("output");
let studentList = document.getElementById("studentList");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

function showStudents() {
    studentList.innerHTML = "";

    if (students.length === 0) {
        studentList.innerHTML = "<li>No students registered yet.</li>";
        return;
    }

    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        studentList.innerHTML += `<li>${s.name} - ${s.email}</li>`;
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
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].email.toLowerCase() === email) {
            emailError.innerText = "Email already registered";
            emailError.style.color = "red";
            hasError = true;
            break;
        }
    }

    if (hasError) {
        return;
    }

    students.push({
        name: name,
        email: email
    });

    showStudents();
    output.innerText = "Student registered successfully!";
    output.style.color = "green";
    form.reset();
});

showStudents();
