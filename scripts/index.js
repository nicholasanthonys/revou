// set name
document.getElementById("name").innerHTML = "Nicholas"





let button = document.getElementById("message-us-button")
document.getElementById("message-us-form-result").style.display = "none";
button.addEventListener("click", (event) => {
    event.preventDefault()

    const nameInput = document.getElementById("name-input").value
    const birthdayInput = document.getElementById("birthday-input").value
    const genderInput = document.querySelector('input[name="gender-input"]:checked').value;
    const messageInput = document.getElementById("message-input").value

    if (nameInput && birthdayInput && genderInput && messageInput) {

        document.getElementById("message-us-form-result").style.display = "block";

        document.getElementById("current-time-result").innerHTML = new Date();
        document.getElementById("name-result").innerHTML = nameInput;
        document.getElementById("birthday-result").innerHTML = birthdayInput;
        document.getElementById("gender-result").innerHTML = genderInput
        document.getElementById("message-result").innerHTML = messageInput
    }





})