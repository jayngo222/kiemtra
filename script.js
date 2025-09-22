
window.onload = function() { 
    // DI CHUỘT VÀO DỰ ÁN
    var duAn1 = document.querySelectorAll('.du-an-item')[0];
    var duAn2 = document.querySelectorAll('.du-an-item')[1];
    var duAn3 = document.querySelectorAll('.du-an-item')[2];
    
    // Dự án 1
    duAn1.onmouseenter = function() {
        this.style.transform = 'scale(1.05)';
    };
    duAn1.onmouseleave = function() {
        this.style.transform = 'scale(1)';
    };
    
    // Dự án 2
    duAn2.onmouseenter = function() {
        this.style.transform = 'scale(1.05)';
    };
    duAn2.onmouseleave = function() {
        this.style.transform = 'scale(1)';
    };
    
    // Dự án 3
    duAn3.onmouseenter = function() {
        this.style.transform = 'scale(1.05)';
    };
    duAn3.onmouseleave = function() {
        this.style.transform = 'scale(1)';
    };
    
    console.log('Trang web đã sẵn sàng!');
    var nutCuonLen = document.createElement('div');
    nutCuonLen.innerHTML = '↑';
    nutCuonLen.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: orange; color: white; text-align: center; line-height: 50px; border-radius: 50%; cursor: pointer; font-size: 20px; display: none; font-weight: bold;';
    
    document.body.appendChild(nutCuonLen);
    
    // Xử lý sự kiện cho nút cuộn lên
    nutCuonLen.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Hiển thị nút khi cuộn xuống
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            nutCuonLen.style.display = 'block';
        } else {
            nutCuonLen.style.display = 'none';
        }
    });
};