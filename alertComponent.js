class AlertElement extends HTMLElement{
    constructor(){
        super();

        // Component props here:
        this.message= '';
        this.background='';
    }

    static get observedAttributes(){
        return ['message', 'background']
    }

    attributeChangedCallback(attribute, oldValue, newValue){
        this[attribute]=newValue
        console.log(attribute, newValue);
        
    }

    connectedCallback(){
        const alert = document.createElement('div');
        alert.innerHTML=this.message;
        alert.style.background=this.background

        this.appendChild(alert)
        this.printed=true
    }

    disconnectedCallback(){
        this.printed=false
    }
}

window.customElements.define('skylab-alert', AlertElement)