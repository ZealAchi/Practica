console.log('function generator:generator trong generator');

function* printName() {
  yield 'redux-saga';
}

function* hello() {
  yield 'xin chao';
  const nameIterator = printName();
  yield nameIterator.next();
  yield '. ket thu';
}
const iterator = hello();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
