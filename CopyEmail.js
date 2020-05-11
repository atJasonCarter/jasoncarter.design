function copyEmail() {
  var copyText = document.getElementById("copyEmail");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

/*
<div class="copy-email" onclick="copyEmail()">
        <h2 class="about-link close-contact">CLICK TO COPY</h2>
        <input style="opacity: 0;" type="text" id="copyEmail" value="jcarter91@gmail.com">
      </input>
      </div>

<script src="/CopyEmail.js" type="text/javascript"></script>

 */
