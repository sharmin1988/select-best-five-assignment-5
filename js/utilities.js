
// ============ common function area ===========

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
 
 }
 
 function setTextElementValueById(elementId, value){
     const textElement = document.getElementById(elementId);
     textElement.innerText = value ;
 }
 
 function getTextElementValueById(elementId){
     const textElement = document.getElementById(elementId);
     const textElementValueString = textElement.innerText;
     const textElementValue = parseFloat(textElementValueString);
     return textElementValue;
 }