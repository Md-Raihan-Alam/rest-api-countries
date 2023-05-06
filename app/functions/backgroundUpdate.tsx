export function backgroundUpdate(){
    const nav=document.querySelector("nav") as HTMLElement;
    const body=document.querySelector("body") as HTMLBodyElement;
    const moonDark=document.querySelector("#moonDark") as HTMLImageElement;
    const moonLight=document.querySelector("#moonLight") as HTMLImageElement;
    const cardBody=document.querySelectorAll("#cardBody")!;
    const seachBox=document.querySelector("#default-search") as HTMLInputElement;
    const searchWhite=document.querySelector("#search-icon-white") as HTMLImageElement;
    const searchBlack=document.querySelector("#search-icon-black") as HTMLImageElement;
    const optionsFilter=document.querySelector("#options-menu") as HTMLElement;
    const optionsItems=document.querySelector("#options-item") as HTMLDivElement;
    const backArrowBlack=document.querySelector("#left_arrow_black") as HTMLImageElement;
    const blackArrowWhite=document.querySelector("#left_arrow_white") as HTMLImageElement;
    const backBtn=document.querySelector("#backBtn") as HTMLButtonElement;
    const neiBtn=document.querySelectorAll("#neiBtn")!
    cardBody.forEach((e)=>{
        e?.classList.toggle("lightModeNav");
        e?.classList.toggle("darkModeNav");
    })
    neiBtn.forEach((e)=>{
        e?.classList.toggle("countryBtnShadowLight");
        e?.classList.toggle("countryBtnShadowBlack");
    })
    moonLight?.classList.toggle("hidden");
    moonLight?.classList.toggle("block");
    moonDark?.classList.toggle("hidden");
    moonDark?.classList.toggle("block");
    backArrowBlack?.classList.toggle("hidden");
    backArrowBlack?.classList.toggle("block");
    blackArrowWhite?.classList.toggle("hidden");
    blackArrowWhite?.classList.toggle("block");
    backBtn?.classList.toggle("countryBtnShadowLight");
    backBtn?.classList.toggle("countryBtnShadowBlack");
    backBtn?.classList.toggle("lightModeNav");
    backBtn?.classList.toggle("darkModeNav");
    nav?.classList.toggle("lightModeNav");
    nav?.classList.toggle("darkModeNav");
    nav?.classList.toggle("lightNavShadow");
    nav?.classList.toggle("darkNavShadow");
    body?.classList.toggle("lightModeText");
    body?.classList.toggle("darkModeText");
    body?.classList.toggle("lightModeBackground");
    body?.classList.toggle("darkModeBackground");
    seachBox?.classList.toggle("lightModeNav");
    seachBox?.classList.toggle("darkModeNav");
    searchBlack?.classList.toggle("block");
    searchBlack?.classList.toggle("hidden");
    searchWhite?.classList.toggle("block");
    searchWhite?.classList.toggle("hidden");
    optionsFilter?.classList.toggle("lightModeNav");
    optionsFilter?.classList.toggle("darkModeNav");
    if(optionsFilter?.classList.contains("lightModeNav"))
    {
        optionsItems?.classList.remove('darkModeNav');
        optionsItems?.classList.add('lightModeNav');
    }
    if(optionsFilter?.classList.contains("darkModeNav")){
        optionsItems?.classList.add('darkModeNav');
        optionsItems?.classList.remove('lightModeNav');
    }
}