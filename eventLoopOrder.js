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
