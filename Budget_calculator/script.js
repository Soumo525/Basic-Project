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


// Balance Calculate

function balanceChange(){
    if(balanceAmount.innerHTML > 0){
        console.log("Positive");
        balanceAmount.innerText = parseInt(showBudget.innerText) - parseInt(calExp.innerText)
        if(balanceAmount.innerHTML < 0 ){
            console.log("Negative");
            balanceAmount.style.color = "#ff0000";
            console.log(balanceAmount.innerHTML);
        }
    }
    else if (balanceAmount.innerHTML < 0){
        console.log("negative");
        balanceAmount.innerText = parseInt(showBudget.innerText) - parseInt(calExp.innerText)
        balanceAmount.style.color = "#ff0000";
    }
    
}




// Show Expense List 
const listBox = document.getElementById("listul")
function expensesList(){
    let li = document.createElement("li")
    li.innerHTML = expItem.value
    listBox.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
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
    balanceChange();
    expensesList();
   }

})

 

//Total expense (existing + new)




