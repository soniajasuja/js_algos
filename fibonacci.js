function getNthFib(n) {
  const fib = [0, 1];
  let counter= 3
  while (counter<=n) {
    const next = fib[0] + fib[1]; 
		fib[0] = fib[1]
    fib[1] = next
    counter++
  }
  return n>=1 ? fib[1] : fib [0]
}
console.log(getNthFib(1))
