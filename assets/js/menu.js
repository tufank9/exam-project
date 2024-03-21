const navBar = document.querySelector('.nav-bar');
const LİNK_URL = "assets/json/menu.json"; // menu json data

async function linkData(){
    const data = await fetch(LİNK_URL)
    const link = await data.json()
    // console.log(link); 
    return link;
}

export async function getLinkData(){
    const links = await linkData();
    console.log(links);
    for(const link of links){
        navBar.innerHTML+=
        `
        <div class="menu">
            <ul>
                <a href="">${link.menu}</a>
            </ul>
        </div> 
        `
    }
}