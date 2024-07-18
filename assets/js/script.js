let input = document.querySelector("#input_txt");
let imageBox = document.querySelector("#img_box");
let qrImage = document.querySelector("#qr_img");

function generateQr() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    input.value;

  imageBox.classList.add("show-img");
}
