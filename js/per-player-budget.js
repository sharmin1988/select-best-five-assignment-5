function getInputFieldValueById(inputFieldId){
   const inputField = document.getElementById(inputFieldId);
   const inputFieldValueString = inputField.value ;
   const inputFieldValue = parseFloat(inputFieldValueString);
   return inputFieldValue;

}

function setTexElementValueById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value ;
}

document.getElementById('btn-pre-player').addEventListener('click', function(){
    const perPlayerBudget = getInputFieldValueById('per-player-input-field');
    const totalPlayerExpence = perPlayerBudget * 5;
    setTexElementValueById('player-expence', totalPlayerExpence)
})