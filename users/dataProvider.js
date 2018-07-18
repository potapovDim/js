const users = [
  {
    role: 'admin',
    username: 'admin@admin.admin',
    password: 'admin',
    specs: [
      'login', 'addUser', 'changeUserRole', 'deleteUser', 'logout'
    ]
  },
  {
    role: 'artDirector',
    username: 'artDir@artDir.artDir',
    password: 'artDir',
    specs: [
      'login', 'approveWebsite', 'rejectWebsite', 'logout'
    ]
  },
  {
    role: 'artDirector',
    username: 'artDir@artDir.artDir',
    password: 'artDir',
    specs: [
      'login', 'findUser', 'logout'
    ]
  }
]

module.exports = {
  users
}