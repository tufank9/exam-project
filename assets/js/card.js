const CONTENT_URL = "assets/json/card.json"; // card json data
const card = document.querySelector('.card')

async function  cardsData(){
    const data = await fetch(CONTENT_URL);
    const cards =  await data.json();
    console.log(cards);
    return cards;
}

export async function getCardData(){
    const cards = await cardsData();
    for(const key of cards){
        card.innerHTML+=
        `
        <div class="card-content">
            <img src="${key.photo}" alt="">
                <div class="card-text">
                    <h1>${key.title}</h1>
                    <p>${key.description}</p>
                </div>
        </div>
        `
    }
}