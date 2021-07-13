const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // Date Object
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 3000);
getClock(); // 화면이 로딩되고 바로 시을 띄우기 위함
setInterval(getClock, 1000);
