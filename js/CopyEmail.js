function copyEmail() {
  var copyText = document.getElementById("copyEmail");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

/*
< value="jcarter91@gmail.com" id="copyEmail">

<!-- The button used to copy the text -->
<button onclick="copyEmail()"></button>

 */
