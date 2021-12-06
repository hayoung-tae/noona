let user = {
  name: "hayoungtai",
  age: 51,
  kg: 85
}

console.log(user)
console.log(user.name)
console.log(user["name"])

user.name = "kangsoyoon"
console.log(user)

let users = [{name : "ha", age: 23}, {name: "young", age: 17}, {name: "tae", age: 40}]

console.log(users)
console.log("첫번째 환자는 누구?", users[0])
console.log("첫번째 환자의 이름은?", users[0].name)
console.log("두번째 환자의 나이는?", users[1].age)