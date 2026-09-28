// Lấy các phần tử trên trang theo id
const form = document.getElementById("form-lien-he");
const thongBao = document.getElementById("thong-bao");

// Khi người dùng bấm nút "Gửi lời nhắn"
form.addEventListener("submit", function (event) {
    event.preventDefault(); // chặn không cho trang tải lại
    const ten = document.getElementById("ten").value;
    thongBao.textContent = "Cảm ơn " + ten + ", mình đã nhận được lời nhắn!";
    form.reset(); // xóa trắng các ô đã nhập
});