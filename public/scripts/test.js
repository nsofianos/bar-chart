function fn(n) {
  return 1 - n / 10;
}

var i;

for (i = 1; i <= 10; i += 1) {
  console.log(i, fn(i) * 10);
}
