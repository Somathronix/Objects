// Синтаксис
// Литерал объекта - Самый простой способ создать объект.Пример: let obj = { key: 'value', number: 42 };
// Конструктор объекта - Использует ключевое слово new для создания объекта.Пример: let obj = new Object();
// Обращение к свойствам объекта - Через точку: obj.key; Через квадратные скобки: obj['key'];
// Свойства и методы, в чём разница - Свойства хранят значения (числа, строки, объекты и т.д.). Методы являются функциями, связанными с объектом, и выполняют действия над его данными или с их использованием. Пример свойства: obj.name = 'John';Пример метода: obj.sayHello = function() { return 'Hello!'; };

const exampleObject = {
    name: "Example",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown"
    },
    hobbies: ["reading", "cycling"]
  };
  
  console.log(exampleObject);

// Модификация 

const person = {
    name: "jack doe",
    hobby: "READING"
  };
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  person.name = capitalizeFirstLetter(person.name);
  
  person.hobby = person.hobby.toLowerCase();
  
  console.log(person);

// Ссылки

function compareObjectProperties(obj1, obj2, properties) {
    for (let property of properties) {
      if (obj1[property] !== obj2[property]) {
        return false; 
      }
    }
    return true; 
  }

// объекты в действии

function parseStringToObj(inputString) {

    const [scheme, name] = inputString.split('://');
    const resultObj = { scheme, name };
    return resultObj;
  }

// проверка существования свойств 

function stringToWordCountObject(inputString) {

    const lowerCaseString = inputString.toLowerCase();

    const words = lowerCaseString.match(/\w+/g) || [];

    const wordCount = {};
  
    words.forEach(word => {
      if (wordCount[word]) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    });
  
    return wordCount;
  }

// обход свойств объекта

function filterObjectByProperties(originalObject, properties) {

    const filteredObject = {};
  
    properties.forEach(property => {
      if (originalObject.hasOwnProperty(property)) {
        filteredObject[property] = originalObject[property];
      }
    });

    return filteredObject;


  }

// вложенные объекты ?

// 

