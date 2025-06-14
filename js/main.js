// // Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// // Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. 
// // Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. 
// // Після проведення операції виводити повідомлення про залишок на рахунку. 

// const bankAccount = {
//     ownerName: "Elon Musk",
//     accountNumber: 777,
//     balance: 1000000000000,
// }

// const add = Number(prompt("Введіть суму яку ви хочете додати на рахунок Ілона Маска: "))
// const minus = Number(prompt("Введіть суму яку ви хочете зняти з рахунка Ілона Маска: "))
// bankAccount.deposit = bankAccount.balance + add;
// bankAccount.withdraw = bankAccount.balance - minus;

// const result1 = confirm(`Баланс після додавання: ${bankAccount.deposit}`)
// if (result1 === true) {
//     console.log(bankAccount.deposit);
// }


// const result2 = confirm(`Баланс після віднімання: ${bankAccount.withdraw}`)
// if (result2 === true) {
//     console.log(bankAccount.withdraw);
// }





// // Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// // Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// // Температуру потрібно отримати з prompt(). 
// // Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// const weather = {
//     temperature: 12,
//     humidity: 777,
//     windSpeed: 23,
// }

// weather.result;
// if (weather.temperature <= 0) {
//     weather.result = true;
//     prompt(`Температура нижче 0 градусів: ${weather.temperature}`);
// } else {
//     weather.result = false;
//     prompt(`Температура вище 0 градусів: ${weather.temperature}, можете дати відгук, яка температура насправді`);
// }





// // Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
// // Додайте метод "login", який буде перевіряти правильність введеного email та password. 

// const user = {
//     name: "Albert Einstein",
//     email: "alberteinstein@gmail.com",
//     password: 777,
// }

// if (user.email === "alberteinstein@gmail.com") {
//     console.log("Email - правильний");
// } else {
//     console.log("Не правильний Email Альберта Енштейна");
// }

// if (user.password === 777) {
//     console.log("Password - правильний");
// } else {
//     console.log("Не правильний Password Альберта Енштейна");
// }



// // Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
// // Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
// // Вивести значення властивостей в консоль. 

// const movie = {
//     title: "Last dance",
//     director: "Michael Jordan",
//     year: 2011,
//     rating: 12,
// }

// movie.estimation;
// if (movie.rating > 8) {
//     movie.estimation = true;
//     console.log(movie.estimation);
// } 

// if (movie.rating <= 8) {
//     movie.estimation = false;
//     console.log(movie.estimation);
// }

// console.log(movie.title);
// console.log(movie.director);
// console.log(movie.year);
// console.log(movie.rating);










// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. 
// Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. 
// Після проведення операції виводити повідомлення про залишок на рахунку. 


const bankAccount = {
    ownerName: "Elon Musk",
    accountNumber: "USA7777777",
    balance: 100000000000,
  
    deposit(amount) {
      this.balance += amount;
      alert(`Поповнення успішне! Залишок на рахунку: ${this.balance} грн`);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        alert("Недостатньо коштів на рахунку.");
      } else {
        this.balance -= amount;
        alert(`Зняття успішне! Залишок на рахунку: ${this.balance} грн`);
      }
    },
  };
  
  
  if (confirm("Бажаєте поповнити рахунок?")) {
    const sum = parseFloat(prompt("Введіть суму для поповнення:"));
    bankAccount.deposit(sum);
  } else if (confirm("Бажаєте зняти гроші з рахунку?")) {
    const sum = parseFloat(prompt("Введіть суму для зняття:"));
    bankAccount.withdraw(sum);
  }
  



// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// Температуру потрібно отримати з prompt(). 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


  const weather = {
    temperature: 0,
    humidity: 60,
    windSpeed: 30,
    isFreezing() {
      return this.temperature < 0;
    }
  };

  weather.temperature = parseFloat(prompt("Введіть температуру повітря:"));
  
  if (weather.isFreezing()) {
    alert("Температура нижче 0 градусів Цельсія.");
  } else {
    alert("Температура вище або дорівнює 0 градусів Цельсія.");
  }
  



  // Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
  // Додайте метод "login", який буде перевіряти правильність введеного email та password. 


  const user = {
    name: "Олена",
    email: "olena@gmail.com",
    password: "12345",
  
    login(inputEmail, inputPassword) {
      return this.email === inputEmail && this.password === inputPassword;
    }
  };
  
  const emailInput = prompt("Введіть email:");
  const passwordInput = prompt("Введіть пароль:");
  
  if (user.login(emailInput, passwordInput)) {
    alert(`Вхід успішний. Вітаємо ${user.name}!`);
  } else {
    alert("Невірний email або пароль.");
  }
  

  // Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
  // Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
  // Вивести значення властивостей в консоль. 


  const movie = {
    title: "Last dance",
    director: "Michael Jordan",
    year: 2011,
    rating: 12,
  
    isTopRated() {
      return this.rating > 8;
    }
  };
  
  console.log("Назва:", movie.title);
  console.log("Режисер:", movie.director);
  console.log("Рік:", movie.year);
  console.log("Рейтинг:", movie.rating);
  console.log("Классний фільм:", movie.isTopRated());
  