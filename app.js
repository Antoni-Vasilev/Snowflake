setInterval(createsnow, 50);
setInterval(() => {
    const endTime = new Date('December 31 ' + new Date().getFullYear() + ' 23:59:59');
    const daysEl = document.getElementById("day");
    const hrEl = document.getElementById("hr");
    const minEl = document.getElementById("min");
    const secEl = document.getElementById("sec");
    const startTime = new Date();
    const diff = endTime - startTime;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hr = Math.floor(diff / 1000 / 60 / 60) % 24;
    const min = Math.floor(diff / 1000 / 60) % 60;
    const sec = Math.floor(diff / 1000) % 60;
    daysEl.innerHTML = day;
    hrEl.innerHTML = hr < 10 ? "0" + hr : hr;
    minEl.innerHTML = min < 10 ? "0" + min : min;
    secEl.innerHTML = sec < 10 ? "0" + sec : sec;
}, 100);
function createsnow()
{
    const snow_flake = document.createElement('div');
    snow_flake.classList.add('sn');
    var t = Math.floor(Math.random() * 4) + 1;
    snow_flake.style.left = Math.random() * window.innerWidth - 20 + 'px';
    snow_flake.style.animationDuration = Math.random() * 5 + 3 + "s";
    snow_flake.style.opacity = Math.random() + 0.1;
    snow_flake.innerHTML = "&#10052";
    snow_flake.style.fontSize = Math.random() * 40 + 20 + "px";

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    },8000);
}

function move(event)
{
    console.log("x: " + event.clientX);
    console.log("y: " + event.clientY);
}
