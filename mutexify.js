const mutexify = require('mutexify/promise')
const lock = mutexify()

let cnt = 0

async function countSeconds(seconds) {
  const release = await lock()
  setTimeout(() => {
    console.log('cnt:', ++cnt)
    release()
  }, seconds * 1000)
}

setInterval(async () =>{
  await countSeconds(3)
}, 500)

Promise.resolve(lock)