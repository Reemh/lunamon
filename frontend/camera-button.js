// tutorial from https://itnext.io/building-a-practical-web-component-9e84f5e4d63a
(function() {
    "use strict";
    class CameraButton extends HTMLElement {
        constructor() {
            super();
            this._shadow = this.attachShadow({ mode: "open" });
            this._shadow.innerHTML = "<button>Show Luna!</button><p></p>";

            this._button = this._shadow.querySelector("button");
            this._info = this._shadow.querySelector("p");
        }

        connectedCallback() {
            this._button.addEventListener("click", this.handleClick);
        }

        disconnectedCallback() {
            this._button.removeEventListener("click", this.handleClick);
        }

        handleClick = (evt) => {
            console.log('we are trying to get the photo :)');
            this._info.innerText = 'capturing...';
        };
    }
    customElements.define("camera-button", CameraButton);
})();