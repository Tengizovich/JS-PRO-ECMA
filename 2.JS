function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    }
  };
}

// Создаем объект счетчика
const counter = createCounter();

// Используем методы объекта
counter.increment(); // Увеличиваем значение счетчика на 1
console.log(counter.getCount()); // Выведет: 1

counter.increment(); // Увеличиваем значение счетчика на 1
counter.increment(); // Увеличиваем значение счетчика на 1
console.log(counter.getCount()); // Выведет: 3

counter.decrement(); // Уменьшаем значение счетчика на 1
console.log(counter.getCount()); // Выведет: 2
