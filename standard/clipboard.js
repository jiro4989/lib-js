/**
 * bindCopyToClipboardは指定のbtnに、クリックすると指定のinputのテキストをクリップ
 * ボードにコピーするイベントを登録します。
 *
 * example:
 *   bindCopyToClipboard("inputId", "buttonId");
 *
 * @param inputId クリップボードにコピーする元のテキストの入力要素ID
 * @param btnId コピーイベントの登録要素
 */
function bindCopyToClipboard(inputId, btnId) {
  let QS = (s) => document.querySelector(s);

  QS(`#${btnId}`).onclick = () => {
    QS(`#${inputId}`).select();
    document.execCommand('copy');
  }
}
