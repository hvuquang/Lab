class SquareNoCheck extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
            .squareN {
                height: 15px;
                width: 15px;
                border: 2px solid lightgrey;
            }
        </style>
        <body>
            <div class="squareN"></div>
        </body>`;
    }
}

customElements.define('square-nocheck-box', SquareNoCheck);