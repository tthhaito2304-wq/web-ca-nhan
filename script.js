document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-lien-he");
  const thongBao = document.getElementById("thong-bao");
  const tenInput = document.getElementById("ten");
  const loiNhanInput = document.getElementById("noidung");

  if (!form || !thongBao || !tenInput || !loiNhanInput) {
    console.error("Không tìm thấy đầy đủ các thành phần của biểu mẫu liên hệ.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    tenInput.setCustomValidity(tenInput.value.trim() ? "" : "Vui lòng nhập họ và tên.");
    loiNhanInput.setCustomValidity(
      loiNhanInput.value.trim() ? "" : "Vui lòng nhập nội dung lời nhắn."
    );

    if (!form.reportValidity()) {
      thongBao.textContent = "Vui lòng kiểm tra lại thông tin đã nhập.";
      return;
    }

    thongBao.textContent = "Thông tin hợp lệ, nhưng biểu mẫu chưa được kết nối để gửi email.";
  });

  form.addEventListener("input", function (event) {
    if (event.target === tenInput || event.target === loiNhanInput) {
      event.target.setCustomValidity("");
    }
    thongBao.textContent = "";
  });
});