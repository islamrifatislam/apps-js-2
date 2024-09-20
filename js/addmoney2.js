document.getElementById('btn add-money')

.addEventListener('click',function(event){
event.preventDefault();
const addMoney=getInputFieldValueById('input add-money');
const pinNumber=getInputFieldValueById('Pin-number');
console.log('add money with pramerter',addMoney,pinNumber);
});