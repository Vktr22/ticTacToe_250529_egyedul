export default class Elem {
    #adat;
    #index;
    constructor(adat, index, szuloElem) {
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }
    megjelenit() {
        
        let html=`<div class="elem">${this.#adat}</div>`
        this.szuloElem.insertAdjacentHTML("beforeend",html) //insertAdjacentHTML-> jobb DOM modositashoz, mint az innerHtml(ez szöveget ad vissza, a masik rogton modositja)
        this.elem = this.szuloElem.querySelector(".elem:last-child");
        
        //console.log(this.elem);
    }


    esemeny(){
        //this.elem=document.querySelector(".elem:last-child")
        this.elem.addEventListener("click",()=>{
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            console.log("kivalaszt event", e);
            window.dispatchEvent(e)
        })
    }

}