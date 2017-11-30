/**
 * 選択した要素の親の子の最初の要素のテキストをクリップボードにコピーする。
 * ex:
 * <span>
 *   <input type="text" value="string" />
 *   <input type="button" onclick="cp(this);" />
 * </span>
 *
 * @param 起点となるボタン要素
 * @return 成功の可否
 **/
function cp(elem) {
  elem.parentNode.getElementsByTagName("input")[0].select();
  return document.execCommand('copy');
}
