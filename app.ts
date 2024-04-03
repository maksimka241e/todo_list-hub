//  add content
const btnCreate = document.querySelector('.btnCreate') as HTMLButtonElement
const inputTitles = document.querySelector('.inputTitle') as HTMLInputElement
const createContent = document.querySelector('.createContent') as HTMLDivElement
const clearContent = document.querySelector('.clearContent') as HTMLButtonElement
// Сам массив в который будем ложить
let tasks:string[] = []
let words;
let words1;
loadTask()
// кнопка по которой начинаем
btnCreate?.addEventListener('click', e => {
    e.preventDefault() 
    // проверка инпута если пустой код не запуститься
    if(inputTitles.value == '' || inputTitles.value == null) return
    // передаем данные инпута в переменную
    let NewTask = inputTitles.value
    // пушим переменную в массив 
    tasks.push(NewTask)
    // реальзуем переминную на интерфейсе
    CreateTask(NewTask)
    // чистим инпут
    inputTitles.value = '' 
})

function CreateTask(text:string){
    // делаем карточку при добавлении
    let title = document.createElement('h3')
    let div = document.createElement('div')
    div.classList.add('blocksCreat')
    title.classList.add('createText')
    title.textContent = text
    // добавление в хранилище
    setTask()
    createContent.appendChild(div)
    div.appendChild(title)
}
// функция добавление в хранилище
function setTask(){
    localStorage.setItem('Task',JSON.stringify(`${tasks}`))
}
// функция проверки
function loadTask(){
    const types = localStorage.getItem('Task')
    if(types !== null){
        //данные которые мы взяли после перезагрузки
        JSON.parse(`${types}`)//.match(/\b(\w+)\b/g)
        words = types.match(/\b(\w+)\b/g)
        tasks = tasks.concat(words)
        // поменять решение так как есть ошибки
    tasks.forEach(item => {
        let title = document.createElement('h3')
        let div = document.createElement('div')
        div.classList.add('blocksCreat')
        title.classList.add('createText')
        title.textContent = item
        createContent.appendChild(div)
        div.appendChild(title)
    })
    if(types !== null){
        console.log('все работает');
    }else{
        setTask() 
    }      
    }else {
      return []
    }
}

// удаление элементов
clearContent.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})
