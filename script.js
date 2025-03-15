document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('result').innerText = "Yayyyy:33 Iuuuu ebeee waaaa:33";
    document.getElementById('result').style.display = 'block';

    this.classList.add('yesEffect');
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    
    // Lấy kích thước của cửa sổ
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán vị trí ngẫu nhiên cho nút "No" (di chuyển không quá xa)
    const randomX = Math.floor(Math.random() * 200); // Di chuyển trong khoảng -50 đến 50 pixel
    const randomY = Math.floor(Math.random() * 200); // Di chuyển trong khoảng -50 đến 50 pixel

    // Di chuyển nút "No" đến vị trí mới
    noButton.classList.add('moving');
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
