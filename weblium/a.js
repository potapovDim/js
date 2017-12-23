const arr = new Array(200).join('1 ').split(' ')

const user = {
  name: "Ivan",
  secondname: "Groznyi",
  age: 54,
  print: function () {
    return "Hello"
  },
  greeting: function () {
    console.log(
      "My name is: ",
      this.name,
      "my second name is: ",
      this.secondname,
      "my age is :",
      this.age
    )
  }
}

{
  // let user = 1
  console.log(user)
}


function sum(arg1, arg2) {
  return arr
}

user.greeting()
// console.log(user.age)
