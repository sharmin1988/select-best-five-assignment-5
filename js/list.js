
//====================== selected five list section ==========================

const listArray = [];

function displayListArea(listArray) {
    const listBody = document.getElementById('display-list');
    listBody.textContent = '';
    //------------------ dynamic player list creat-------------------
    for (let i = 0; i < listArray.length; i++) {
        const playerName = listArray[i];
        const li = document.createElement('li');
        li.innerHTML = `
            <li class="list-group-item"><span>${i + 1}.</span> ${playerName}</li>
            `;
        listBody.appendChild(li);
    }
}


function addToList(element){
    
    // const button = document.getElementById('www')
    // button.setAttribute('disabled', 'true')
    // // for (const button of buttons) {
    // //     // ✅ Set the disabled attribute
    // //     button.setAttribute('disabled', '');}

        const playerName = element.parentNode.children[0].innerText;
        listArray.push(playerName);
        if (listArray.length > 5) {
            alert('maximum limit exceed');
            return
        }
        else {
            displayListArea(listArray)
        }
    }