window.onload = function() {
  // 2桁0埋め関数
  function pad(num) {
    return ('0' + num).slice(-2);
  }

  let countTime = function() {
    let date = new Date();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let html = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);

    document.getElementById("timer").innerHTML = html;
    setTimeout(countTime, 500);
  }
  countTime();
}

