function Tree(key, value) {
	this.key = key;
	this.value = value;
	this.left = null;
	this.right = null;

	// show 會遞迴印出樹的 key 跟 value
	// level 代表第幾層，用於印出空白來視覺化樹
	this.show = function (level) {
		console.log (" ".repeat(level * 4) + "(" + key + "," + value + ")") // 印出 level * 4 個空白後，再印出 (key, value)
		if (this.left != null) { 
			this.left.show(level + 1) 
		} else {
			console.log(" ".repeat((1 + level) * 4) + "null")
		}
		if (this.right != null) {
			this.right.show(level + 1) 
		} else {
			console.log(" ".repeat((1 + level) * 4) + "null")
		}
	}

	// insert 會採用二元搜尋樹的規則插入key 跟 value
	this.insert = function (key, value) {
		if (key < this.key) {
			if (this.left == null) {
				this.left = new Tree(key, value);
			} else {
				this.left.insert(key, value);
			}
		} else {
			if (this.right == null) {
				this.right = new Tree(key, value);
			} else {
				this.right.insert(key, value)
			}
		}
	}

	// search 吃一個參數 key，要回傳在這棵樹中相對應的 value
	this.search = function (key) {
		// 請填我
	}
}

var t = new Tree(10, 4);
t.insert(5, 555);
t.insert(3, 33);
t.insert(50, 50);
t.insert(20, -222);
t.insert(30, 100);
t.show(0);
