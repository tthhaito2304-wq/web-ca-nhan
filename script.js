document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-lien-he");
  const thongBao = document.getElementById("thong-bao");
  const tenInput = document.getElementById("ten");

  if (!form || !thongBao || !tenInput) {
    console.error("Không tìm thấy form, input tên hoặc ô thông báo.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ten = tenInput.value.trim();

    thongBao.textContent = ten
      ? "Cảm ơn " + ten + ", mình đã nhận được lời nhắn!"
      : "Cảm ơn bạn, mình đã nhận được lời nhắn!";

    form.reset();
  });
});