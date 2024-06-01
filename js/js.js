const splashscreen = document.getElementById("splashscreen")
const page = document.getElementById("page")

function OpenInvitation() {
    splashscreen.style.display = "none"
    page.style.display = "block"
}
const eventDate = new Date('2024-07-25T19:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    document.getElementById('day').innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('hour').innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minute').innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('second').innerText = Math.floor((difference % (1000 * 60)) / 1000);

    // تحديث العداد كل ثانية
    setTimeout(updateCountdown, 1000);
}

// تشغيل الدالة لأول مرة
updateCountdown();

const eventDate2 = new Date('2024-07-27T19:00:00');

function updateCountdown2() {
    const currentDate = new Date();
    const difference = eventDate2 - currentDate;

    document.getElementById('day2').innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('hour2').innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minute2').innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('second2').innerText = Math.floor((difference % (1000 * 60)) / 1000);

    // تحديث العداد كل ثانية
    setTimeout(updateCountdown2, 1000);
}

// تشغيل الدالة لأول مرة
updateCountdown2();

function mute() {
    let audio = document.getElementById('audio');
    let button = document.getElementById('mute');
    let isMute = +localStorage.getItem('mute');
    if (!isMute) {
        audio.muted = true;
        audio.pause()
        button.innerHTML = '<i color="#000" class="fa fa-volume-off my-float"><br><br> click here to play song </i>';
        localStorage.setItem('mute', 1);
    } else {
        audio.muted = false;
        audio.volume = 0.9;
        audio.play()
        button.innerHTML = '<i color="#fff" class="fa fa-volume-up my-float"><br><br> Enjoy </i>';
        localStorage.setItem('mute', 0);

    }
}