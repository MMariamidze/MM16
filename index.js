const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const link = 'https://randomuser.me/api?results=50';

GetData()

async function GetData() {
    const response = await fetch('https://randomuser.me/api?results=50');
    const {results} = await response.json();

    results.forEach(info =>{

        const user = document.createElement('div')
        user.classList.add('userInfo')

        user.innerHTML = `
            <div class="card">
            <div class="card-body">
            <div class ="cardimg">
            <img src ="${info.picture.large}" alt ="${info.name.first}">
            </div>
            <h2>${info.name.first} ${info.name.last}</h2>
            <p>${ "connect:" + " " +info.email}</p>
            <p>${"gender:" + " " + info.gender}</p>
            <p>${"age:" + " " + info.dob.age}</p>
            <p>${"country:" + " " + info.location.country}</p>
            <p>${"city:" + " " + info.location.city}</p> 
            </div>    
            </div>
        `;
        main.appendChild(user)
    })
}

form.addEventListener ('submit' , srch => {
    srch.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ' '){
        GetData(link + searchTerm )
        search.value = ' '
    }
    else{
        window.location.reload()
    }
})