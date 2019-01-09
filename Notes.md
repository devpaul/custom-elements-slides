# Custom Elements

* What are Web Components
	* Custom Elements
	* Shadow DOM
	* HTML Templates

* What are Custom Elements
	* Part of Web Components
		
	

* Support
	* Native Browser Support
	* Polyfills
	
* Custom Element API
	* Extend HTMLElement or [subclass](https://html.spec.whatwg.org/multipage/indices.html#element-interfaces)
	* Lifecycle
		* connectedCallback - Custom Element connected to the DOM
		* disconnectedCallback - disconnected from the DOM
		* adoptedCallback - moved across documents
	* Attributes
		* observedAttributes: string[]
		* attributeChangedCallback(attributeName: string, oldValue: any, newValue: any) - a watched attribute has changed
	* 
	
* WebComponent Frameworks
	* [Svelte](https://svelte.technology/)
	* [Stencil](https://stenciljs.com/docs/decorators)
	* [Polymer](https://www.polymer-project.org/)
	* Framework Wrapped Custom Elements
		* [Dojo]
		* [Angular]
		
		
* [Web Components Benchmark](https://vogloblinsky.github.io/web-components-benchmark/)
	* Example implementations of Custom Elements
	* Benchmarks for TODO and Pascal Triangle
	

* Resources
	* [Web Components (SitePen Blog)](https://www.sitepen.com/blog/2018/07/06/web-components-in-2018/)
	* [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements)
	* https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
	* https://www.webcomponents.org/
	* {Shadow root open vs closed modes](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af)
