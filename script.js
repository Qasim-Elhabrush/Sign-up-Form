let signUpButton = document.getElementById("createAccount ");



function User(firstName, lastName, email, phoneNumber, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
}
let submit = function() {
    let password = document.getElementById("password ").value;
    let confirmPassword = document.getElementById("confirmPassword ").value;
    if (password != confirmPassword && password.length < 8) {
        document.getElementById("password ").className = "error";
        document.getElementById("confirmPassword ").className = "error";
        alert("Passwords must match and be at least 8 characters!")
    } else if (password == confirmPassword && password.length > 8) {
        let fName = document.getElementById("fName").value
        fName = new User(document.getElementById("fName").value, document.getElementById("lName ").value, document.getElementById("email ").value, document.getElementById("phoneNumber ").value, document.getElementById("password ").value);
        login(fName);
    }

}
signUpButton.addEventListener("mousedown", () => signUpButton.style.backgroundColor = "rgb(52, 163, 52)");
signUpButton.addEventListener("mouseup", () => signUpButton.style.backgroundColor = "#596D48");
signUpButton.addEventListener("click", submit);

login = function(firstName) {
    alert(`Hello ${firstName.firstName}! Thank you for signing up on this website!`);
}