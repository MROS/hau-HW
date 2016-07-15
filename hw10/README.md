## 二元搜尋樹實做

二元搜尋樹是一種插入、刪除、搜尋都有不錯效能的資料結構，簡單二元搜尋樹的效能並不穩定，雖然有許多增強型能夠實現穩定的效能，但實做上都有一定的複雜度，本次作業僅練習最基礎的二元樹。

本作業的二元樹定義如下
- 樹中任一節點擁有四個屬性：key、value、left、right
- 任一節點 n 的左子樹中節點的所有key皆小於 n 的key
- 任一節點 n 的右子樹中節點的所有key皆大於 n 的key
- 樹中沒有兩個相同的 key


讓我們回憶一下 javascript 中有

``` javascript
var a = {"key1" : 1};
a["key2"] = 2;
a["key3"] = 3;
console.log(a[key2]);
```

這樣的行為，而我們自己寫的搜尋樹（參照 tree.js），也是在模擬這種擁有插入、查找的行為

``` javascript
// 提醒：使用數字作為 key 會比較好計算大小，此處為模擬 object 之行為才使用字串
var a = new Tree("key1", 1);
a.insert("key2", 2);
a.insert("key3", 3);
console.log(a.search("key2"))
```

1. 在 tree.js 中已完成搜尋樹的插入，現在請實做搜尋
2. 如果有時間，也試著來實做刪除 
