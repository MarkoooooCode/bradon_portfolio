function sendMail() {
    var params = {
        email: document.getElementById("email").value,
    };

    const serviceID = "service_9i6b9do";
    const templateID = "template_ygywmxh";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("email").value = "";

            console.log(res);
            alert("Your Message was Sent Successfully");
        })

    .catch((err) => console.log(err));

}

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_9i6b9do';
        const templateID = 'template_ygywmxh';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });