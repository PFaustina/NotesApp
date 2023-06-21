const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => addNewNote());
function addNewNote() {
    const note  = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"></button>
        <button class="fas fa-edit">

        </button>
        <button class="delete">
            <i class="fa fa-trash-alt"></i>
        </button>
    </div>
    <div class="hidden"></div>
    <textarea></textarea>
`
//delete btn
const deleteBtn = note.querySelector('.delete')
//delete functiom
deleteBtn.addEventListener('click', () => {
    note.remove();
})

document.body.appendChild(note);
}