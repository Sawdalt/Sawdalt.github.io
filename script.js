// ===== COPY EMAIL BUTTON =====
// Copies my email address to the visitor's clipboard so they can paste it
// into whatever email they use. No server or email app needed.

const myEmail = "sawdalt13@gmail.com";
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(myEmail)
    .then(function () {
      copyStatus.textContent = "Copied! " + myEmail;
      copyStatus.className = "success";
    })
    .catch(function () {
      // Clipboard can be blocked (for example on file:// pages), so show the address instead
      copyStatus.textContent = "Couldn't copy. My email is " + myEmail;
      copyStatus.className = "error";
    });
});
