// Lấy các trường và nút
var emailInput = document.getElementById("signup-input-email");
var passwordInput = document.getElementById("signup-input-password");
var confirmPasswordInput = document.getElementById("signup-input-cfpassword");
var signupButton = document.getElementById("signup-btn");

// Thêm sự kiện click cho nút đăng ký
signupButton.addEventListener("click", function () {
  var emailValue = emailInput.value;
  var passwordValue = passwordInput.value;
  var confirmPasswordValue = confirmPasswordInput.value;

  // Kiểm tra tính hợp lệ của thông tin đăng ký
  if (emailValue && passwordValue && confirmPasswordValue) {
      if (passwordValue === confirmPasswordValue) {
          // Tạo một đối tượng JSON chứa thông tin đăng ký
          var registerData = {
              "gmail": emailValue,
              "password": passwordValue
          };

          // Thực hiện yêu cầu POST đến API /register
          fetch("http://127.0.0.1:5000/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(registerData)
          })
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              if (data.message === 'Đăng ký thành công') {
                  // Xử lý khi đăng ký thành công, ví dụ: chuyển hướng đến trang chính
                  window.location.href = homeUrl;
              } else {
                  // Xử lý khi đăng ký không thành công, ví dụ: hiển thị thông báo lỗi
                  alert("Đăng ký không thành công. Tên người dùng đã tồn tại hoặc có lỗi khác.");
              }
          })
          .catch(function (error) {
              // Xử lý lỗi nếu có
              console.error("Lỗi khi thực hiện yêu cầu đăng ký:", error);
          });
      } else {
          // Nếu mật khẩu và xác nhận mật khẩu không khớp, bạn có thể hiển thị thông báo lỗi
          alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      }
  } else {
      // Nếu bất kỳ trường nào trống, bạn có thể hiển thị thông báo lỗi
      alert("Vui lòng điền đầy đủ thông tin.");
  }
});