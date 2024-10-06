const button=document.querySelector('button')
const table=document.querySelector('table')

const fetchUser=(async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    data.forEach(todo=>{
    let tr=document.createElement('tr')
    let td1=document.createElement('td')
    let td2=document.createElement('td')
    let td3=document.createElement('td')

    td1.innerText=todo.name
    td2.innerText=todo.email
    td3.innerText=todo.phone

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    table.appendChild(tr);
        // console.log(todo.username);
    })
})
// fetchUser();
button.addEventListener('click',fetchUser);

