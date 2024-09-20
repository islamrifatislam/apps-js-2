// 
document.getElementById('btn add-money')

 .addEventListener('click',function(event){
event.preventDefault();
// console.log('coding is a life patner');
// getInputFieldValueById();
// const addMoney=getInputFieldValueById();
// console.log('add money value',addMoney)

// // vlaue
// const addMoney=document.getElementById('input add-money').value;
// const addMoneyNumber=parseFloat(addMoney);
const addMoney=getInputFieldValueById('input add-money');
console.log('add money with pramerter',addMoney);
});