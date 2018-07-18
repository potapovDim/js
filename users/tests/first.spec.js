const { users } = require('../dataProvider')


class TestProvider {
  login(usernData) {
    it(`login ${usernData.username}`, () => {
      ////console.log(usernData)
    })
  }

  addUser() {
    it('addUser', () => {
     //console.log('addUSer')
    })
  }

  changeUserRole() {
    it('changeUserRole', () => {
     //console.log("changeUserRole")
    })
  }

  deleteUser() {
    it('delete user', () => {
     //console.log('delte user')
    })
  }

  logout() {
    it('logout', () => {
     //console.log('log out')
    })
  }


  approveWebsite() {
    it('approveWebsite', () => {
     //console.log('approveWebsite')
    })
  }

  rejectWebsite() {
    it('rejectWebsite', () => {
     //console.log('rejectWebsite')
    })
  }

  findUser() {
    it('findUser', () => {

    })
  }
}

const testProvider = new TestProvider()


describe('data driven with data provider', () => {
  users.forEach(user => {
    describe(`suit ${user.role}`, () => {
      user.specs.forEach(spec => {
        testProvider[spec](user)
      })
    })
  })
})