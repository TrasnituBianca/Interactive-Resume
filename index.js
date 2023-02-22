

function contactMe() {
  let email = "trasnitubianca@gmail.com";
  let subject = "RESUME";
  let body = "Hello, I have a question regarding...";
  let mailto_link = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  window.location.href = mailto_link;
}
document.getElementById("contact-me-button").addEventListener('click', contactMe);
document.getElementById("contact-me-button-one").addEventListener('click', contactMe);


function contactMePhone() {
  let phoneNumber = "+40 0742765499";
  let tel_link = "tel:" + phoneNumber;
  window.location.href = tel_link;
}
document.getElementById("contact-phone-button").addEventListener('click', contactMePhone);


function downloadPDF() {
  var link = document.createElement('a');
  link.href = 'cv.pdf';
  link.download = 'CV Trasnitu Bianca.pdf';
  document.body.appendChild(link);
  link.click();
 
}


function toggleTheme() {
  var body = document.querySelector("body");
  body.classList.toggle("light-theme");
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach((reveal) => {
    let windowHeight = window.innerHeight;
    let elementTop = reveal.getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", reveal);