# jsutil
## clipboard.js
### 使い方
下記のようにinput text要素のvalueにコピーしたいテキストを記述しておく。

```html
<script src="clipboard.js" />
<span>
  <input type="text" value="text" />
  <input type="button" onclick="cp(this);" />
</span>
```

あとはボタンをクリックするだけで、
その親要素の子のinput要素からテキストをクリップボードにコピーする。

