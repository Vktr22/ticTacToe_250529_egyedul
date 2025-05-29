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
        this.szuloElem.innerHTML += `<div class="elem" data-index="${this.#index}">
                                        ${this.#adat}
                                    </div>`;
        this.elem = this.szuloElem.querySelector(".elem:last-child");
    }


    esemeny(){
        //this.elem=document.querySelector(".elem:last-child")
        this.elem.addEventListener("click",()=>{
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            window.dispatchEvent(e)
        })
    }

}