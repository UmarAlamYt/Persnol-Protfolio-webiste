/*=============================typing animation ============================  */
let typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "YouTuber"],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});

const btn = document.querySelector(".btn-submit");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `full Name: ${fullname.value} <br> Email: ${email.value} <br> Message : ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "",
    Password: "",
    To: "",
    From: "",
    Subject: subject.value,
    Body: bodyMessage,
  }).then(
    (message) => alert("Email sent successfully!"),
    (error) => alert("Failed to send email: " + JSON.stringify(error))
  );
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
});
