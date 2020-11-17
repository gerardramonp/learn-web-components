class SaludoBasicoElement extends HTMLElement{
    constructor(){
        super();

        this.name=''
        this.age=0
        this.coso=''
        this.printed=false
    }

    // Per obtenir els atributs que permet el compo
    static get observedAttributes(){
        return ['name', 'age', 'coso', 'otracosa']
    }

    // Quan canvien els atributs de la etiqueta s'executa aixo per cada attribut canviat.
    attributeChangedCallback(attribute, oldValue, newValue){
        console.log(`${attribute} changed from ${oldValue} to ${newValue}`)
        this[attribute]=newValue
        
        // Si el compo ja esta pintat i s'actualitzen els atributs, fem que actualitzi el que ens interessa
        if(this.printed){
            this.innerHTML=`Hello ${this.name}, you are ${this.age} years old.`
        }
    }
    
    // Quan es crea el compo s'executa connectedCallback
    connectedCallback(){
        console.log('Printing...');
        
        this.innerHTML=`Hello ${this.name}, you are ${this.age} years old.`
        this.printed=true
    }

    
    disconnectedCallback(){
        this.printed=false
    }
   
}

window.customElements.define('basic-hi', SaludoBasicoElement)