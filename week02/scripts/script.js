const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') { 

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = input.value;
    deleteButton.textContent = '❌';

    li.appendChild(span);
    li.appendChild(deleteButton);

    list.appendChild(li);
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })

    input.value = '';

    };

    input.focus();

});