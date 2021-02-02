// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
let resolveP1 = null;
let resolveP2 = null;
let resolveP3 = null;

const p1 = new Promise(resolve => resolveP1 = resolve);
const p2 = new Promise(resolve => resolveP2 = resolve);
const p3 = new Promise(resolve => resolveP3 = resolve);

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  let table = document.querySelector('#table')
                  let img = document.createElement("img");
                  img.src = "public/images/steak.jpg";
                  table.appendChild(img);
                  resolveP1(3);
                })
              })
            })
          })
        })
      })
    })
  });




// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

          let table = document.querySelector('#table')
          let img = document.createElement("img");
          img.src = "public/images/mashPotatoes.jpg";
          table.appendChild(img);
          resolveP2(4);
        })
      })
    })
  })
});

// Iteration 3 using async and await

async function makeFood(steps) {
  for(step of steps) {
    await addFood(step, '#brusselSprouts');
  }

  let table = document.querySelector('#table')
  let img = document.createElement("img");
  img.src = "public/images/brusselSprouts.jpg";
  table.appendChild(img);
  resolveP3(5);
}

makeFood(brusselSprouts);

Promise.all([p1, p2, p3]).then(() => {
  document.querySelector('body').innerHTML += `<button>Diner is served.</button>`; 
});



