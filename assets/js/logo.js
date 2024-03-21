const navBar = document.querySelector('.nav-bar');
const LOGO_URL = "assets/json/logo.json"; // logo json data

async function  logoData(){
    const data = await fetch(LOGO_URL)
    const logo =  await data.json()
    return logo;
}

export async function getLogoData(){
    const logo=await logoData();
    navBar.innerHTML+=
    `
    <div class="logo"> 
        <img src="${logo.logo}" alt=""> 
    </div>
    `
}