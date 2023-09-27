// Lấy các trường và nút
var emailInput = document.getElementById("signup-input-email");
var passwordInput = document.getElementById("signup-input-password");
var confirmPasswordInput = document.getElementById("signup-input-cfpassword");
var signupButton = document.getElementById("signup-btn");

// Thêm sự kiện click cho nút đăng ký
signupButton.addEventListener("click", function () {
    // Lấy giá trị từ các trường
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var confirmPasswordValue = confirmPasswordInput.value;

    // Thực hiện xử lý đăng ký ở đây
    // Ví dụ: kiểm tra tính hợp lệ của thông tin đăng ký
    if (emailValue && passwordValue && confirmPasswordValue) {
        if (passwordValue === confirmPasswordValue) {
            // Nếu thông tin hợp lệ, bạn có thể thực hiện chuyển hướng hoặc gửi dữ liệu đăng ký đến máy chủ
            window.location.href = homeUrl;
        } else {
            // Nếu mật khẩu và xác nhận mật khẩu không khớp, bạn có thể hiển thị thông báo lỗi
            alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        }
    } else {
        // Nếu bất kỳ trường nào trống, bạn có thể hiển thị thông báo lỗi
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});