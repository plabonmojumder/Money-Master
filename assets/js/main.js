document.getElementById('btn-calculator').addEventListener('click', function(){
   const incomeFeild = document.getElementById('income-field');
   const  incomeAmountString=incomeFeild.value;
    const incomeAmount=parseFloat(incomeAmountString);
   //  console.log(incomeAmount);
  
    const foodField=document.getElementById('food-field');
    const foodFieldAmountString= foodField.value;
    const foodFieldAmount=parseFloat(foodFieldAmountString);

    const rentFeild=document.getElementById('rent-feild');
    const rentFeildAmountString= rentFeild.value;
    const rentFeildAmount=parseFloat(rentFeildAmountString);

    const clothesFeild=document.getElementById('clothes-feild');
    const clothesAmountString= clothesFeild.value;
    const clothesAmount=parseFloat(clothesAmountString);
 

 
       const totalExpenses =document.getElementById('total-expenses');
       const  totalExpensesAmount =totalExpenses.innerText;
       const totalExpensesAmountString= parseFloat(totalExpensesAmount);
        
       const newCExpenses= foodFieldAmount + rentFeildAmount + clothesAmount;
       totalExpenses.innerText=newCExpenses;

       const balanceTotalfeild =document.getElementById('balance-total');
       const  balanceTotal=totalExpenses.innerText;
       const balanceTotalString= parseFloat(totalExpensesAmount);
         

       const currentTotalBalance =incomeAmount  - newCExpenses;
       balanceTotalfeild.innerText=currentTotalBalance
       


   document.getElementById('btn-save').addEventListener('click',function () {
      const savingFeild=document.getElementById('saving');
      const savingFeildAmountString=savingFeild.value;
      const savingFeildAmount=parseFloat(savingFeildAmountString);
      console.log(savingFeildAmount);


     const savingdAmount =document.getElementById('saving-amount')
     const savingAmountString=savingdAmount.innerText;
     const savingAmountValue= parseFloat(savingAmountString)
     // console.log(savingAmountValue);

     const currentSavingBalance = (incomeAmount * savingFeildAmount)/100;
     savingdAmount.innerText=currentSavingBalance;

     const remainigBalance=document.getElementById('remaining-total');
     const remainigBalanceString =remainigBalance.innerText;
     const remainigBalanceAmount =parseFloat(remainigBalanceString);

     const currentRemainigTotal=incomeAmount - (newCExpenses + currentSavingBalance);
     remainigBalance.innerText=currentRemainigTotal;

      
   })
   
})