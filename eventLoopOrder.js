// MY PREDICTIONS
// A, E, K, D, C, F, J, G, H, I, B

// My prediction was wrong. G comes before J because the G executes immediately it reaches the async function. I initially thought the outer await would delay its execution. The correct order is: A, E, K, D, C, F, G, J, H, I, B

console.log("A");
setTimeout(() => console.log("B"), 0);
queueMicrotask(() => console.log("C"));
process.nextTick(() => console.log("D"));
(async () => {
  console.log("E");
  await null;
  console.log("F");
  await (async () => {
    console.log("G");
    await null;
    console.log("H");
  })();
  console.log("I");
})();
Promise.resolve().then(() => console.log("J"));
console.log("K");
