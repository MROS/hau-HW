function test(number, name, fun, cases) {
	console.log("testing " + number + ". " + name);
	for (var i in cases) {
		var ca = cases[i];
		if (fun(ca[0]) == ca[1]) {
			console.log("✓ " + name + "(" + ca[0] + ") == " + ca[1]);
		}
		else {
			console.log("✗ " + name + "(" + ca[0] + ") 應為 " + ca[1] + " 而非 " + fun(ca[0]));
		}
	}
}
test(
	1,
	"addOne",
	addOne,
	[[1, 2], [10, 11], [10999, 11000]]
	);
