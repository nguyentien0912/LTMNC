// Lấy các trường và nút
var emailInput = document.getElementById("login-input-email");
var passwordInput = document.getElementById("login-input-password");
var loginButton = document.getElementById("login-btn");

// Thêm sự kiện click cho nút đăng nhập
loginButton.addEventListener("click", function () {
    // Lấy giá trị từ trường email và mật khẩu
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    // Thực hiện xử lý đăng nhập ở đây
    // Ví dụ: kiểm tra xem email và mật khẩu có hợp lệ không
    if (emailValue && passwordValue) {
        // Nếu hợp lệ, bạn có thể thực hiện chuyển hướng hoặc gửi dữ liệu đăng nhập đến máy chủ
        window.location.href = homeUrl;
    } else {
        // Nếu không hợp lệ, bạn có thể hiển thị thông báo lỗi hoặc thực hiện xử lý khác
        alert("Vui lòng nhập email và mật khẩu.");
    }
});

document.getElementById("to-signup-btn").addEventListener("click", function() {
  window.location.href = signupUrl;
});