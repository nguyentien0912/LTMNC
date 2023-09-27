// Lấy tham chiếu đến textarea và nút
var textarea = document.querySelector(".text-input textarea");
var button = document.getElementById("text-input-btn");

// Thêm sự kiện click cho nút
button.addEventListener("click", function () {
    // Lấy giá trị từ textarea
    var textareaValue = textarea.value;

    // Hiển thị giá trị lấy được => viết func goi server
     alert("Dữ liệu từ textarea: " + textareaValue);
});