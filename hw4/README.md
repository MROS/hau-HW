# HW4

## javascript 基本流程控制

### 函數介紹
待補

### 作業格式

題號. 函數名

具體描述、舉例

例如第1題的

1. addOne

	函數參數為一整數，回傳此整數加1

那你應該要寫出如下
``` javascript
function addOne(x) {
	return x + 1;
}
```

### 測試方法說明
在本資料夾底下有額外三個檔案
分別為

> test.html
> test.js
> solution.js

你可以將此三檔案下載下來用來測試

其中test.html會去載入solution.js跟test.js  
請將答案寫在solution.js中，目前已經寫好第一題的答案  
test.js則是放我寫的測試腳本跟測資的地方，程式碼也相當簡單，你可以打開來看來了解我是如何測試的  
想要測試的話就將test.html在瀏覽器打開，開主控台，即可看到測試結果  

請在確認通過所有簡單測資之後把solution.js檔傳給我

### 作業內容

1. addOne

	函數參數為一整數，回傳此整數加1

2. sum

	函數參數為兩個整數，回傳兩整數之和

3. sumArray

	函數參數為一整數陣列，回傳此陣列所有元素之和

4. factorial

	函數參數為一整數x，回傳x!

5. fibonacci

	函數參數為一整數x，回傳費氏數列的第x項

	此處費式數列定義為
	f1 = 1  
	f2 = 2  
	fn = fn-1 + fn-2

6. triangle1

	函數參數為一整數x，請回傳一個字串表示x層的三角形

	例如console.log(triangle1(4))，會印出
	
```
*  
**  
***  
****  
```

寫成javascript字串的形式則為`"*\n**\n***\n****\n"`

7. triangle2
	
	函數參數為一整數x，請回傳一個字串表示x層的三角形

	例如console.log(triangle2(4))，會印出
	
```
   *
  ***
 *****
*******
```

寫成javascript字串的形式則為`"   *\n  ***\n *****\n*******\n"`
