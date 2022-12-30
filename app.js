document.getElementById('calculate-button').onclick = function() {
     // get user input
     var billAmount = document.getElementById('bill-amount').value;
     var tipPercentage = document.getElementById('tip-percentage').value;
   
     // calculate tip amount
     var tipAmount = billAmount * tipPercentage;
   
     // display tip amount
     document.getElementById('tip-amount').innerHTML = tipAmount.toFixed(2);
   };
s   