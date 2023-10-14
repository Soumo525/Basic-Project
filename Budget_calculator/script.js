const budget = document.getElementById('total-amount');
const setbudget = document.getElementById('total-amount-button')
let showBudget = document.getElementById('amount');
// expenses
const expItem = document.getElementById('product-title');
const expPrice = document.getElementById('user-amount');
const expBtn = document.getElementById('check-amount');

// Show Expenses

let calExp = document.getElementById('expenditure-value') 
const balanceAmount = document.getElementById('balance-amount')

let tempValue = 0;

setbudget.addEventListener('click',() => {
    // console.log(budget.value);
    // showBudget.innerHTML = budget.value;
    // console.log("Work");
    tempValue = budget.value;
    if(budget.value === '')
    {
        alert("Not Ok")
    }
    else
    {
        showBudget.innerHTML = tempValue;
        balanceAmount.innerText = tempValue - parseInt(calExp.innerText);
    }
    budget.value ="";

})


//calculation

function calculation(){

}


// Show Exp
let tempExValue = 0;
expBtn.addEventListener('click', () => {
    tempExValue = parseInt(expPrice.value)
    console.log(tempExValue);
    // let total = tempExValue - expPrice.innerHTML;
    // console.log(total);
    if(expItem.value  === '') {
      
        alert("Enter the Product Name ")
       
    }

    else if(expPrice.value === '')
    {
        alert("Enter the Product cost ")
    }

   else {
    calExp.innerText = tempExValue + parseInt(calExp.innerText);
    console.log(tempExValue);
    console.log(calExp);
    expItem.value = "";
    expPrice.value = "";
   }

})

 

//Total expense (existing + new)





