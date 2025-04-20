function showMessage() {
    document.getElementById("contact").innerText = "Email: account@gmail.com";
}
function handleForm(event) {
    event.preventDefault(); // Sahifa yangilanmasin

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("form-status").innerText = `Rahmat, ${name}! Biz siz bilan tez orada bog‘lanamiz.`;
}
