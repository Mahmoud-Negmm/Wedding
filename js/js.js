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