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
    // Tạo một đối tượng JSON chứa thông tin đăng nhập
    var loginData = {
      gmail: emailValue,
      password: passwordValue,
    };

    // Thực hiện yêu cầu POST đến API /login
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message === "Đăng nhập thành công") {
          // Xử lý khi đăng nhập thành công, ví dụ: chuyển hướng đến trang chính
          window.location.href = homeUrl;
        } else {
          // Xử lý khi đăng nhập không thành công, ví dụ: hiển thị thông báo lỗi
          alert(
            "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập."
          );
        }
      })
      .catch(function (error) {
        // Xử lý lỗi nếu có
        console.error("Lỗi khi thực hiện yêu cầu đăng nhập:", error);
      });
  } else {
    // Nếu không hợp lệ, bạn có thể hiển thị thông báo lỗi hoặc thực hiện xử lý khác
    alert("Vui lòng nhập email và mật khẩu.");
  }
});

document.getElementById("to-signup-btn").addEventListener("click", function () {
  window.location.href = signupUrl;
});
