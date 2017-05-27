$(function() {

  /**
   * すべてのテーブルタグ要素のtd要素の中から、
   * 正規表現でマッチした行のみを表示する。
   */
  $("#searchInput").keyup(function() {
    // 検索文字列
    let re = new RegExp($(this).val(), 'i');

    $('table').each(function() {
      let table = $(this);

      table.children('tbody').children('tr').each(function() {
        // thead要素の回数分ループする
        // 一度でもマッチしたらその後の要素を調べる必要が無いので、
        // 早々にbreakして次のループへ
        let len = table.children("thead").children('tr').children().length;

        for (let i=0; i<len; i++) {
          let txt = $(this).find("td:eq(" + i + ")").html();
          // リンク要素もあるので、その場合を除外
          txt = $('<a>').html(txt).text();

          if(txt != null && txt.match(re)){
            // マッチした行のみを表示
            $(this).show();
            break;
          } else {
            // マッチしなかったら非表示
            $(this).hide();
          }
        }
      });
    });
  });

});
