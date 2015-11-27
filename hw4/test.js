function test(number, name, fun, cases) {
	console.log("testing " + number + ". " + name);
	for (var i in cases) {
		var ca = cases[i];
		var ret = fun.apply(this, ca[0]);
		if (ret == ca[1]) {
			console.log("✓ " + name + "(" + ca[0] + ") == " + ca[1]);
		}
		else {
			console.log("✗ " + name + "(" + ca[0] + ") 應為 " + ca[1] + " 而非 " + ret);
		}
	}
}
test(
	1,
	"addOne",
	addOne,
	[[[1], 2], [[10], 11], [[10999], 11000]]
);

test(
	2,
	"sum",
	sum,
	[[[1, 2], 3], [[5, 6], 11]]
);

test(
	3,
	"sumArray",
	sumArray,
	[
		[[[10, 10, 10, 10, 10]], 50],
		[[[1, 2, 3, 4, 5]], 15]
	]
);

test(
	4,
	"facrotial",
	factorial,
	[
		[[0], 1],
		[[1], 1],
		[[5], 120],
		[[15], 1307674368000]
	]
);

test(
	5,
	"fibonacci",
	fibonacci,
	[
		[[1], 1],
		[[2], 2],
		[[3], 3],
		[[5], 8],
		[[10], 89],
		[[14], 610],
		[[23], 46368],
	]
);

test(
	6,
	"triangle1",
	triangle1,
	[
		[[1], "*\n"],
		[[2], "*\n**\n"],
		[[7], "*\n**\n***\n****\n*****\n******\n*******\n"]
	]
);

test(
	7,
	"triangle2",
	triangle2,
	[
		[[1], "*\n"],
		[[2], " *\n***\n"],
		[[5], "    *\n   ***\n  *****\n *******\n*********\n"]
	]
)