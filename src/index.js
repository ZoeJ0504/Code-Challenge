// Your code here
document.addEventListener("DOMContentLoaded", () => {
//getting data
    fetch("http://localhost:3000/characters")
.then (res => res.json())
.then(data => data.forEach(character => displayCharacter(character)))

function displayCharacter(character){
    const divBar = document.getElementById("character-bar")
    const spanChar = document.createElement("span")
    spanChar.textContent = character.name
    divBar.appendChild(spanChar)

//created labels for grabbing the Elements
    const divInfo = document.getElementById("detailed-info")
    const p = document.getElementById("name");
    const img = document.getElementById("image");
    const span = document.getElementById("vote-count");
// displays animal information when clicked
    spanChar.addEventListener('click', (e) => {
    e.preventDefault()
        p.textContent = character.name
    img.src = character.image
    span.textContent = character.votes

    const voteForm = document.getElementById("votes-form")

    // adds the new votes to the current total

voteForm.addEventListener("submit", handleSubmit);
    
    let text;

    function handleSubmit(e){
        e.preventDefault()
        const num2 = span.textContent
        const votesInput = document.getElementById("votes")
        text = parseInt(votesInput.value) + parseInt(num2)
        span.textContent = text
    };

    // bonus deliverables -Reset Button
    const resetButton = document.getElementById("reset-btn")
resetButton.addEventListener("click", (e) => {
          span.textContent = 0
})
    });
}

//bonus deliverables - Create New Character
const newCharForm = document.getElementById("character-form")

newCharForm.addEventListener("submit", createNewCharacter)

function createNewCharacter(e){
    e.preventDefault()
    let newCharacter = {
        name: e.target.name.value,
        image: e.target["image-url"].value,
        votes: 0
    }
    displayCharacter(newCharacter)
    // postNewChar(newCharacter)
    newCharForm.reset()

}
// post request doesn't work

// function postNewChar (newCharacter){
// fetch("http://localhost:3000/characters",{
//     method: "POST",
//     header: {"Content- Type": "application/json" },
//     body: JSON.stringify(newCharacter) 
// })
// .then(res => res.json)
// }

})