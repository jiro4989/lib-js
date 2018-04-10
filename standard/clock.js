/**
 * bindClockは指定のIDの要素を現在時刻を出力する時計にします。
 *
 * example:
 *   bindClock("elementId");
 *
 * @param id 時計に設定する要素のID
 */
function bindClock(id) {
  let pad = (n) => ('0' + n).slice(-2);
  let countTime = function() {
    let date     = new Date();
    let hours    = date.getHours();
    let minutes  = date.getMinutes();
    let seconds  = date.getSeconds();
    let timeText = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);

    document.getElementById(id).innerHTML = timeText;
    setTimeout(countTime, 500);
  }
  countTime();
}
