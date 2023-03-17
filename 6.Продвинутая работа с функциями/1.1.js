function sumTo(n) {
  let a = 0;
  for (let i = 1; i <= n; i++) {
    a += i;
  }
  return a;
}

console.log(sumTo(100));

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100));
