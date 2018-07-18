
async function getEnv() {
  return 'chrome'
}

async function runThis() {
  const a = await getEnv()

  describe('3', () => {
    beforeEach(() => {
      console.log('here 3', a)
    })


  })
}


runThis()
