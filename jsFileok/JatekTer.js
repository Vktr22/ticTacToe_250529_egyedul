import Elem from "./Elem.js";
export default class JatekTer{
    #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    #lepesSzamlalo = 0;
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }

    getAdat() {
        return this.#lista;
    }

    setAadat(adat) {
        this.#lista = adat;
    }

   megjelenit() {
    this.szuloElem.innerHTML = ""; // torol
        for (let i = 0; i < this.#lista.length; i++) {
            new Elem(this.#lista[i], i, this.szuloElem);
        }
    }



    esemeny() {
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail);

            let index = event.detail;
            if(this.#lepesSzamlalo % 2 === 0){
                this.#lista[index]="X";
            } else {
                this.#lista[index]="O";
            }
            this.#lepesSzamlalo++;

            //ujra progra allapot:
            //new JatekTer(this.#adat);
            this.megjelenit();
        });
    }

}