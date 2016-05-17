## 閱讀習題
請閱讀以下連結的文章，並回答問題

[淘寶的起源故事、技術發展之路 – 2013](https://blog.longwin.com.tw/2013/11/taobao-origin-story-history-2013/)

* 「快取」是常見加速資料存取的手段，一般而言，快取出現在CPU、記憶體之間，或者放置在伺服器和資料庫之間。請問快取可以加速效能的理論基礎是什麼？（試想書櫃和牀頭書的例子）

* 中間有一段提到淘寶一度從PHP語言移植到Java上面，PHP和Javascript類似是一種直譯語言，而Java是編譯語言。請說明Java執行效能通常比PHP好的原因。

* 當一個伺服器處理能力到達瓶頸的時候，常見的手段是分散化，也就是把原本一個伺服器提供的服務切割成多個伺服器，比如說一個web server複製立十個就有機會達到十倍的throughput。然而，並不是每種服務都適合分散化，尤其對資料庫伺服器而言，為了了保證資料的一致性，資料庫切割成多分並不能各自獨立作業。請說明怎麼性質的工作比較適合分散化？除了分散化之外，還有什麼加強效能的手段？（hint：想想麥當勞服務檯是怎麼運作的）

* 女生的臉蛋有時間限制，同樣的伺服器的硬體也會有失效的時候（？），長時間高度負載的服務下機器故障是無法避免的。請分別對(1)資料儲存（資料庫）、(2)運算服務（網頁伺服器）討論有什麼提升reliability的辦法。

## 程式習題
以下題目請用Python實作，如果沒有時間撰寫程式的話，可以提出題目的演算方法。

* 輸入數字n，列出1, 2, ..., n數列所有排列。

* 給定任意兩個由小到大排列的數列A1, A2, ..., An和B1, ..., Bm，請把A和B數列合併成一個由小到大數列。

* 輸入一個數字n，對n做質因數分解。

## 紙筆練習

* 給你一個區域地圖，上面有城市的地點，還有城市之間有哪些道路，（換句話說，城市是點，兩點之間最多有一個邊），我希望走過每個道路剛好一次，城市可以重複拜訪，請問怎麼樣的地圖可以達成？

* 程式語言常見的布林邏輯運算子有and、or、not、xor，實際上我們只需要其中兩個運算子就可以組合出所有的布林運算，請說明並討論可以怎麼達成。

* 給定n個工作，每個工作有一個起始時間和結束時間(Si, Ti)，然而不同工作只見可能會重疊，現在你要如何挑選(1)數目最多、(2)互不重疊的工作？