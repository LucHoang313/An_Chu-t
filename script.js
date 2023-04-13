var audio = document.getElementById("audio");
audio.play(); <
script src = "https://cdn.jsdelivr.net/npm/fireworks-canvas@2.1.9" > < /script{">"}
    // Lấy đối tượng div fireworks
var fireworksDiv = document.querySelector('.fireworks');

// Tạo đối tượng pháo hoa
var fireworks = new Fireworks({
    target: fireworksDiv,
    hue: 120,
    startDelay: 1,
    minDelay: 20,
    maxDelay: 30,
    speed: 4,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 0.1,
    particles: 70,
    trace: 3,
    explosion: 8,
    autoresize: true,
    sound: {
        enable: false
    }
});

// Bắt đầu hiệu ứng
fireworks.start();