const list = document.getElementById('list');
const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.querySelector('#box');

 const add = ()=> {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value='';
    let span = document.createElement("span");
    span.innerHTML = '&#10005';
    li.appendChild(span);
    save();
}

const save = ()=>{
    localStorage.setItem('toDo', list.innerHTML);
};

const display = ()=>{
    list.innerHTML = localStorage.getItem('toDo');
}

const cross = (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('crossed');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    save();
}

list.addEventListener('click',cross);

const clear = ()=>{
    localStorage.clear('toDo');
}

display();


