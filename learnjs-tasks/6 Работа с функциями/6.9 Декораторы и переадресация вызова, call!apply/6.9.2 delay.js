
function f(x) {
  console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}


f1000("test"); // показывает "test" после 1000 мс
f1000("test"); // показывает "test" после 1000 мс
f1000("test"); // показывает "test" после 1000 мс



/*

function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
}

*/

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}

f = cachingDecorator(f);
