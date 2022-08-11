/*
mutexify.index.js에서 queueTick(call) -> call() 로  바꾸면서 실행 결과를 살펴보자.
queueTick은 lock의 실행 순서를 뒤로 미룬다.
 */

const mutexify = require('mutexify')
const lock = mutexify()

lock((release)=>{
  console.log('b0')
  setTimeout(()=>{
    console.log('a1')
    release()
  }, 1000)
})

console.log('b1')

lock((release)=>{
  console.log('b2')
  setTimeout(()=>{
    console.log('a2')
    release()
  }, 1000)
})

console.log('b3')