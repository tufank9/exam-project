const FOOTERCARD_URL = "assets/json/footerCard.json"; // footer Card json data
const cardArea = document.querySelector('.card-area')

async function footerCardData(){
    const data = await fetch(FOOTERCARD_URL)
    const footerCard = await  data.json() 
    // console.log(footerCard);
    return  footerCard;
}

export async function getFooterCardData(){
    const footerData = await footerCardData()
    // console.log(footerData);
    cardArea.innerHTML+=
    `
        <div class="card-area-text">
            <div class="text-area">
                <h1>${footerData.title}</h1>
                <p>${footerData.description}</p>
            </div>
            <button class="btn-area">${footerData.button}</button>
        </div>
    `
}