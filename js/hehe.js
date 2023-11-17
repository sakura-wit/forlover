document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage');

    function rotateImage() {
        rotatingImage.style.transform = 'rotate(-50deg)'; /* Xoay hình ảnh 360 độ */
        setTimeout(resetRotation, 1000); /* Đặt hàm resetRotation để chạy sau 1 giây */
    }

    function resetRotation() {
        rotatingImage.style.transform = 'rotate(-10deg)'; /* Đặt góc xoay về 0 độ */
        setTimeout(rotateImage, 1000); /* Gọi lại hàm rotateImage để tạo hiệu ứng liên tục */
    }

    // Bắt đầu xoay hình ảnh khi trang đã tải
    return rotateImage();
});


document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotatingImage1');

    function rotateImage() {
        rotatingImage.style.transform = 'rotate(-5deg)'; /* Xoay hình ảnh 360 độ */
        setTimeout(resetRotation, 300); /* Đặt hàm resetRotation để chạy sau 1 giây */
    }

    function resetRotation() {
        rotatingImage.style.transform = 'rotate(10deg)'; /* Đặt góc xoay về 0 độ */
        setTimeout(rotateImage, 300); /* Gọi lại hàm rotateImage để tạo hiệu ứng liên tục */
    }

    // Bắt đầu xoay hình ảnh khi trang đã tải
    return rotateImage();
});