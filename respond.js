emailjs.init("4700y3xbEnDXqNyat");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const honeypotValue = this.querySelector('input[name="website"]').value;
    if (honeypotValue){
        alert("SPAM SPAM SPAM");
        return;
    }
    emailjs.sendForm("service_mlwhrbd", "template_lxj45cd", this)
        .then(() => {
            alert("Message has been sent!");
            this.reset();
        })
        .catch((error) => {
            alert("Failed to send message.\n" + JSON.stringify(error));
        });
});