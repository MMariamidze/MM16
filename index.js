const main = document.getElementById('main');

GetData()

async function GetData() {
    const response = await fetch('https://randomuser.me/api?results=50');
    const data = await response.json();
    GetData(data.results);
}

function GetData (info){
    info.forEach((info) =>{
        const {first,email, gender,age, country,} = info;
        const user = document.createElement('div')
        user.classList.add('user')
        user.innerHTML = `
        <img src ="${info.picture.large}" alt ="${info.name.first}">
        <div class="user-info">
            <h2>${info.name.first} ${info.name.last}</h2>
            <p>${info.email}</p>
            <p>${"gender" + info.gender} ${"age" + info.age}</p>
            <p>${"country" + info.country}
        
        `;
        main.appendChild(user)

    })
}