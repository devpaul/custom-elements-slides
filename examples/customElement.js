const template = document.createElement('template');
template.innerHTML = `
<style>
	.root {
		width: 400px;
	}
	header {
		background: #50f0ff;
		color: black;
		font-weight: bold;
		padding: 10px;
	}
</style>
<div class="root">
	<header><slot name="title-slot">Confirm</slot></header>
	<div>
		<slot></slot>
	</div>
	<div>
		<button>Ok</button>
	</div>
</div>
`;

class CustomElement extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	static get observedAttributes() { return ['button-text']; }

	attributeChangedCallback(attributeName, oldValue, newValue) {
		if (attributeName === 'button-text') {
			this.shadowRoot.querySelector('button').textContent = newValue;
		}
	}

	connectedCallback() {
		console.log(`I've been connected`);
	}

	disconnectedCallback() {
		console.log(`Hey! I've been disconnected!`);
	}

	adoptedCallback() {
		console.log(`I've been adopted`);
	}

}

window.customElements.define('phxts-custom-element', CustomElement);
