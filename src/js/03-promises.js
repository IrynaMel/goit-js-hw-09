import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit)

// const promicesArr = []



function onFormSubmit(e){
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const delays = Number(formElements.delay.value);
  const step= Number(formElements.step.value);
  const amount= Number(formElements.amount.value);

  createMas(amount, step, delays)


};

function createMas(amount, step, delays){
  let position = 0;
  let delay = 0
  for(let i = 0; i < amount; i+=1){
    
    // let user ={
    //   position: i+1,
    //   delay: step*i+delay
    // }
   
      position = i+1;
      delay = delays + step*i;
      createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`)
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`)
      })
    
    }
      


   }
   
  
  




function createPromise(position, delay) {
  
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{ 
      const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }}, delay

    )
  }
  )
  
}






//   const promices = promicesArr.map((promice) => createPromise(promice.position, promice.delay))
//   console.log(promices)
//   Promise.race(promices)
//   .then(({position, delay})=> {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`)
// })
//   .catch(({position, delay})=> { 
// console.log(`❌ Rejected promise ${position} in ${delay}ms`)
//   // Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`)
// });
// }



 
// function createPromise  (position, delay)  {
//   const promise = new Promise((resolve, reject) =>{
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(()=>{
//   if (shouldResolve) {
//     resolve( Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`))
//   } 
//   else {
//   reject(
//       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`))
//   }}, delay);
//   })
//  return promise
//   }


