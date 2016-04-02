## 閱讀習題
這次是英文文章，內容偏向於講解「規格」，閱讀Response Format段落即可。

[HTTP: The Protocol Every Web Developer Must Know - Part 1](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

* 上次課程中，我們提到HTTP的request或者response都會分成header和body兩個部分。請說明下列幾個header欄位的意義、出現在request還是response、有什麼用途？
  * User-Agent
  * Referer
  * ETag
  * Content-Length
  * Last-Modified

* HTTP常見的四種方法GET、POST、PUT、DELETE中最常見到的不外乎是GET和POST，請比較GET和POST各自用在哪些場合？有什麼差異？

## 程式習題

#### 伺服器編程

上次課程我們介紹了Tornado的使用方式，請應用Tornado實做以下習題，可以使用其他的函式庫。如果對Tornado的使用方式有疑問請直接參考Tornado的官方網站或其他教學。作業截止前tutor暫時不會回答實做細節的問題。

* 請寫一個網頁，輸入網址`http://127.0.0.1/time-now`可以看到現在時間。

* 請寫一個猜拳遊戲，玩家和電腦不斷猜拳直到玩家失敗兩次爲止，並記錄玩家的勝利次數，必須提供網頁顯示目前所有玩家的排名（以玩家勝場次數排序）。

#### 正規表達式（regular expression）

正規表達式是一種表達字串格式的語法，以下列舉一些規則

* `a*`代表字串中有任意數目的a（包含0個），例如`baaac`（中間3個a）、`wtf`（裏面有0個a）都符合這個條件。

* `b+`代表字串中有至少一個b，例如`bbs`符合該條件，但是`azure`並不符合。

* `b..e`中的「__.__」代表可以匹配任何字元，例如`bike`、`bone`都符合規則，但是`bounce`無法匹配。

* `s.*c`代表s開頭、c結尾的任意長片段，「.\*」可以匹配任意長度的字串，例如`tsabcd`中的`sabc`片段符合上述條件。

* `s?he`中的`?`代表前面的s可有可無，例如`he`和`she`都符合條件。

* `geek|nerd`代表可以是`geek`或者`nerd`片段其一，例如`He is a geek.`因爲包含`geek`符合條件。

* 正規表達式可以使用括弧，例如`(a|b|c).+`代表a、b、c其中一種字開頭的片段。

* 可以使用`^`符號強制從字串第一個字匹配，例如`^he`可以匹配`he is a hacker`，但是不可匹配`Who is he?`。`$`符號則可以強制匹配到字串最後一個字，例如`it$`可以匹配`What is it`，但是不可匹配`it is true`

* 其他語法請參考網路上Python的正規表達式教學。

請應用正規表達式語法搭配Python的re套件完成以下習題

* 檢查一個字串是不是空字串。

* 檢查一個字串至少出現3個以上個q，q不一定連續。

* 檢查一個字串是不是不包含空白字元和大寫英文字母。

* 檢查一個字串長度是不是至少有5個字。

* 檢查一個字串是不是合法的電子信箱，格式爲`帳號@位置`，帳號不可是空字串，位置必須包含至少一個「.」，「.」之間至少間隔一個非點字。

* 請應用正規表達式把英文文章中所有出現的詞列出來，詞定義爲連續的英文字母（Hint: re的findall函數）。

* 請列舉一個不能用正規表達式匹配的格式。
