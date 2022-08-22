

document.getElementById('btn-pre-player').addEventListener('click', function(){
    const perPlayerBudget = getInputFieldValueById('per-player-input-field');
    const totalPlayerExpence = perPlayerBudget * listArray.length;
    setTextElementValueById('player-expence', totalPlayerExpence)
})

document.getElementById('btn-total').addEventListener('click', function(){
    const totalPlayerExpence = getTextElementValueById('player-expence');
    const managerExpence = getInputFieldValueById('manager-expence');
    const coachExpence = getInputFieldValueById('coach-expence');
    const totalExpence = totalPlayerExpence + managerExpence + coachExpence;
    setTextElementValueById('total-expence', totalExpence);
})