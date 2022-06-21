// let pEl = document.createElement('p')
// pEl.textContent = 'Welcome to my page'
// document.body.prepend(pEl)

// CRUD for Elements
// Create : document.createElement // element.append(newElement)
// Read : document.querySelector // document.querySelectorAll
// Update : element.property = value
// Delete : element.remove()

let actors = [
  {
    name: 'Robert Downey Jr.',
    picture:
      'https://www.ed92.org/wp-content/uploads/2021/12/Robert-Downey-Jr.-780x585.jpg',
    age: 46,
  },
  {
    name: 'Chris Hemsworth',
    picture:
      'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
    age: 38,
  },
  {
    name: 'Nicolas Cage',
    picture:
      'https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=655bb453d9203003505f7b0fb5497fde',
    age: 48,
  },
  {
    name: 'Mark Ruffalo',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlBUZm9fiPPWktLq5DgtceUuzzOnmHK_ZTJkLiBuXZGeqbNJwWKugsAGK5QVxAvUThrQ&usqp=CAU',
    age: 50,
  },
  {
    name: 'Scarlett Johansson',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg',
    age: 36,
  },
  {
    name: 'Chris Pratt',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Chris_Pratt_2018.jpg',
    age: 36,
  },
]

function createActorItem(actor) {
  let liEl = document.createElement('li')
  liEl.className = 'actor-item'

  let imgEl = document.createElement('img')
  imgEl.src = actor.picture
  imgEl.alt = ''
  imgEl.width = 200

  let h2El = document.createElement('h2')
  h2El.textContent = `Name: ${actor.name}`

  let ageEl = document.createElement('p')
  ageEl.textContent = `Age: ${actor.age}`

  let retirementAge = document.createElement('p')
  retirementAge.textContent = `Retirement age: ${65 - actor.age}`

  let deleteActorButton = document.createElement('button')
  deleteActorButton.textContent = 'Delete'
  deleteActorButton.addEventListener('click', () => {
    liEl.remove()
  })

  liEl.append(imgEl, h2El, ageEl, retirementAge, deleteActorButton)

  let actorUl = document.querySelector('.actor-list')
  actorUl.append(liEl)
}

for (let actor of actors) {
  createActorItem(actor)
}
