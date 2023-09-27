var textarea = document.querySelector(".text-input textarea");
var button = document.getElementById("text-input-btn");
var mediaWrapper = document.getElementById("media-wrapper");

// Thêm sự kiện click cho nút
button.addEventListener("click", function () {
    // Lấy giá trị từ textarea
    var textareaValue = textarea.value;

    // Gửi yêu cầu POST đến API Flask
    fetch("https://3cd5-2405-4803-d7cd-4d50-11e0-d12-6288-8244.ngrok-free.app/tts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: textareaValue })
    })
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error(`Lỗi: ${response.status}`);
            }
        })
        .then(blobData => {
            // Tạo một trình phát âm thanh để phát dữ liệu âm thanh
            var audio = document.createElement("audio");
            audio.controls = true; // Hiển thị thanh điều khiển phát
            var audioBlob = new Blob([blobData], { type: "audio/wav" });
            var audioUrl = URL.createObjectURL(audioBlob);
            audio.src = audioUrl;

            // Thêm trình phát âm thanh vào phần tử "tts-wrapper"
            mediaWrapper.innerHTML = ''; // Xóa bất kỳ trình phát âm thanh trước đó
            mediaWrapper.appendChild(audio);
        })
        .catch(error => {
            console.error(`Lỗi: ${error}`);
        });
});

var logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", function () {
  window.location.href = loginUrl;
});