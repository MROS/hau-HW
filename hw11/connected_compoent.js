// 節點數量為 10 ，編號為從 0 到 9
var data = {
  node_number: 10,
  edges: [
    [0, 1],
    [1, 2],
    [1, 7],
    [0, 7],
    [2, 8],
    [2, 9],
    [9, 6],
    [6, 5],
    [5, 4],
    [4, 3],
    [1, 3],
    [1, 4]
  ],
  from: 0,
  to: 9
};

function solution() {
  // 填我
}

if (solution(data) == 3) {
  console.log("success")
} else {
  console.log("fail")
}
