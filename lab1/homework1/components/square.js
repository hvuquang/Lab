class Square extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
            .square {
                height: 12px;
                width: 12px;
                border: 1px solid black;
            }
        </style>
        <body>
            <div class="square"></div>
        </body>`;
    }
}

customElements.define('square-box', Square);