const mutexify = require('mutexify/promise')
const lock = mutexify()

let cnt = 0

async function countSeconds(second) {
  const release = await lock()
  setTimeout(() => {
    console.log('cnt:', ++cnt)
    release()
  }, second * 1000)
}

setInterval(async () =>{
  await countSeconds(3)
}, 500)
