/**
 *
 * すべてのチェックボックスのonclick属性を上書きして、
 * 保持する選択状態をcookieに保存するイベントを登録する。
 * 保存する期間は 30日 である。
 *
 */

/* Cookieに登録したすべてのチェックボックスの選択状態HashMapのキー */
const KEY = 'checkbox';

/**
 * チェックボックスをクリックしたときの動作。
 * すべてのチェックボックスの情報をCookieに登録する。
 * @param checkboxes 対象となるチェックボックスの配列
 */
function clickCheckbox(checkboxes) {
  let s = KEY + "=";
  for (let i=0; i<checkboxes.length; i++) {
    s += checkboxes[i].checked == true ? "1" : "0";
    s += ",";
  }
  // 末尾に ',' が残っているので削除。
  s = s.substr(0, s.length - 1);

  const SEC   = 1000;
  const MIN   = 60 * SEC;
  const HOUR  = 60 * MIN;
  const DAY   = 24 * HOUR;
  const WEEK  = 7  * DAY;
  const MONTH = 30 * DAY;

  // 有効期限を登録追加して登録
  let date = new Date();
  date.setTime(date.getTime() + MONTH);
  let endDay = date.toGMTString();
  s += ";expires=" + endDay;
  document.cookie = s;
}

/**
 * Cookieからチェックボックスの選択状態の配列を取得する。
 * @return チェックボックスの選択状態配列 (String)
 *         あるいは null
 */
function getCheckboxValues() {
  let cookieText = document.cookie + ";";
  let startNo = cookieText.indexOf(KEY);

  if (startNo != -1) {
    let endNo = cookieText.indexOf(";", startNo);
    let sub = cookieText.substring(startNo + KEY.length + 1, endNo);
    return sub.replace(";", "").split(",");
  }

  return null;
}

/**
 * すべてのチェックボックスのリストを配列で返す。
 * @return チェックボックスの配列
 */
function getCheckboxes() {
  let inputs = document.getElementsByTagName("input");
  let checkboxes = [];
  for (let i=0; i<inputs.length; i++) {
    let input = inputs[i];
    if (input.type == "checkbox") {
      checkboxes.push(input);
    }
  }

  return checkboxes;
}

/**
 * Cookieから選択されていたチェックボックスをチェックして、
 * すべてのチェックボックスに、
 * クリック時にcookieにすべてのチェックボックスの選択状態を
 * 保存するclickイベントを登録する。
 */
window.onload = function() {
  let values = getCheckboxValues();
  let checkboxes = getCheckboxes();

  // checkboxのクリックイベントのバインディング
  for (let i=0; i<checkboxes.length; i++) {
    checkboxes[i].onclick = function() { clickCheckbox(checkboxes); }
    // TODO
    // actionイベントの追加がうまくいかないので一時コメントアウト
    // checkboxes[i].addEventListener("click", clickCheckbox(checkboxes), false);
  }

  // 選択状態は0,1で保持しているので変換して登録
  if (values != null && 0 < checkboxes.length) {
    for (let i=0; i<values.length; i++) {
      checkboxes[i].checked = values[i] == '1' ? true : false;
    }
  }
}

