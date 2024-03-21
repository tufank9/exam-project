const TİTLE_URL = "assets/json/title.json"; // title json data
const title = document.querySelector('.title')

async function  titleData(){
    const data = await fetch(TİTLE_URL);
    const titles = await data.json();
    console.log(titles);
    return  titles;
}

export async function getTitleData(){
    const titles =await titleData();
    title.innerHTML+=
    `
    <h1>${titles.main.title}</h1>
    <p>${titles.main.description}</p> 
    `
}

