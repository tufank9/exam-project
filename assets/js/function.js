import { getCardData } from "./card.js";
import { getFooterCardData } from "./footerCard.js";
import { getLogoData } from "./logo.js";
import { getLinkData } from "./menu.js";
import { getTitleData } from "./title.js";

export function init(){
    getCardData()
    getFooterCardData()
    getLogoData()
    getLinkData()
    getTitleData()
}