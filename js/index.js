// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
  if (state.whiteSauce) {
document.getElementsByClassName('sauce')[0].classList.add("sauce-white") 
    } else {
      document.getElementsByClassName('sauce')[0].classList.remove("sauce-white")
    }
  }

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
document.getElementsByClassName("crust")[0].classList.add("crust-gluten-free") 
    } else {
      document.getElementsByClassName("crust")[0].classList.remove("crust-gluten-free")
    }
  }


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').classList.remove("active")
  }
  else
  {
    document.querySelector('.btn.btn-pepperoni').classList.add("active")

  }
  if(state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.remove("active")
  }
  else
  {
    document.querySelector('.btn.btn-mushrooms').classList.add("active")
  
    }
    if(state.greenPeppers){
      document.querySelector('.btn.btn-green-peppers').classList.remove("active")
    }
    else
    {
      document.querySelector('.btn.btn-green-peppers').classList.add("active")
    
      }
      if(state.whiteSauce){
        document.querySelector('.btn.btn-sauce').classList.remove("active")
      }
      else
      {
        document.querySelector('.btn.btn-sauce').classList.add("active")
      
        }
        if(state.glutenFreeCrust){
          document.querySelector('.btn.btn-crust').classList.remove("active")
        }
        else
        {
          document.querySelector('.btn.btn-crust').classList.add("active")
        
          }
}

function renderPrice() {
//  Iteration 4: change the HTML of `<aside class="panel price">`
 const price = document.querySelector(".panel.price strong");
 let totalprice=Number(10)
 if (state.pepperoni) {
   totalprice+=ingredients.pepperoni.price
       document.getElementById("include-pep").style.display="list-item"

  }
  else{
    document.getElementById("include-pep").style.display="none"
  }
  if (state.mushrooms) {
    totalprice+=ingredients.mushrooms.price
    document.getElementById("include-mus").style.display= "list-item"
  }
  else{
    document.getElementById("include-mus").style.display="none"
  }
  if (state.greenPeppers) {
    totalprice+=ingredients.greenPeppers.price
    document.getElementById("include-green").style.display="list-item"

     }
     else{
    document.getElementById("include-green").style.display="none"
  }
     if (state.whiteSauce) {
    totalprice+=ingredients.whiteSauce.price
        document.getElementById("include-white").style.display="list-item"

  }
  else{
    document.getElementById("include-white").style.display="none"
  }
  if (state.glutenFreeCrust) {
    totalprice+=ingredients.glutenFreeCrust.price
      document.getElementById("include-gluten").style.display="list-item"

  }
  else{
    document.getElementById("include-gluten").style.display="none"
  }
  price.innerHTML = `$${totalprice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
})


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
