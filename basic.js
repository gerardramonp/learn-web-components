const userCardStyles = `
    .user-card{
        display: flex;
        flex-direction: row;
        background-color: whitesmoke;
        border-radius: 10px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    }
    .user-card__img{
        height: 70px;
        border-radius: 50%;
    }
    .user-card__button{
        border-radius:10px;
        background:'blue'
    }
`;
const userCardTemplate = document.createElement("template");
userCardTemplate.innerHTML = `
    <style>
        ${userCardStyles}
    </style>
    <div class="user-card">
        <img src="" alt="user-avatar" class="user-card__img">
        <div class="user-card__info">
            <p class="info__name"></p>
            <p class="info__phone"></p>
        </div>
        <button class="user-card__button">Hide Info</button>
    </div>
`;

class UserCardElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(userCardTemplate.content.cloneNode(true));
    this.avatar = "";
    this.name = "";
    this.phone = "";

    this.showInfo = true;
  }

  static get observedAttributes() {
    return ["name", "phone", "avatar"];
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    this[attribute] = newValue;
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".user-card__img").src = this.avatar;
    this.shadowRoot.querySelector(".info__name").innerHTML = this.name;
    this.shadowRoot.querySelector(".info__phone").innerHTML = this.phone;

    const buttonElement = this.shadowRoot.querySelector(".user-card__button");
    buttonElement.addEventListener("click", () => {
      const infoElement = this.shadowRoot.querySelector(".user-card__info");
        console.log(infoElement);
        
      if (this.showInfo) {
        buttonElement.innerHTML = "Show Info";
        infoElement.style.display = "none";
        this.showInfo = !this.showInfo;
      } else {
        buttonElement.innerHTML = "Hide Info";
        infoElement.style.display = "block";
        this.showInfo = !this.showInfo;
      }
    });
  }
}

window.customElements.define("user-card", UserCardElement);
