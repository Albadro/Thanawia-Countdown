let gltchDly = 0;
const countdown = document.getElementById("countdown");
const container = document.getElementsByClassName("container")[0];

const endtime = new Date("2025-06-22T09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endtime - now;
    // const timeLeft = 0;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "💀  💀";
        document.body.classList.add("shake");
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(timeLeft % 1000);

    countdown.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds} <span class="millis">${milliseconds}</span>`;

    setTimeout(updateCountdown, 1);
}
updateCountdown();

// function rndmGltch() {
//     gltchDly = Math.floor(Math.random() * 10000);
//     console.log(gltchDly);
//     document.querySelectorAll(".shake").forEach((element) => {
//         element.classList.add("fast");
//     });
//     container.classList.add("up");
//     setTimeout(() => {
//         document.querySelectorAll(".fast").forEach((element) => {
//             element.classList.remove("fast");
//         });
//         container.classList.remove("up");
//     }, 250);
//     setTimeout(rndmGltch, gltchDly);
// }
// rndmGltch();

// function createSmokeEffect() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//             let smoke = document.createElement("div");
//             smoke.classList.add("smoke");
//             smoke.style.left =
//                 Math.random() * document.documentElement.clientWidth + "px";
//             smoke.style.animationDuration = Math.random() * 3 + 2.5 + "s";
//             document.body.appendChild(smoke);

//             setTimeout(() => {
//                 smoke.remove();
//             }, 6000);
//         }, i * 300);
//     }
// }

// createSmokeEffect();

// setInterval(createSmokeEffect, 5000);
