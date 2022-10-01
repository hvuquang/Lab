class Square extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
            .square {
                height: 15px;
                width: 15px;
                border: 2px solid #6D9886;
            }
        </style>
        <body>
            <div class="square"></div>
        </body>`;
    }
}

customElements.define('square-box', Square);