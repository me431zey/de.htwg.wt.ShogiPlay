import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element/lit-element.js?module';

// Create your custom component
class CustomGreeting extends LitElement {
    // Declare properties
    static get properties() {
        return {
            name: { type: String }
        };
    }
    // Initialize properties
    constructor() {
        super();
        this.name = 'World';
    }
render() {
        return html `
           <style>
          /* Style The Dropdown Button */
          .dropbtn {
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
          }

          /* The container <div> - needed to position the dropdown content */
          .dropdown {
            position: relative;
            display: inline-block;
          }

          /* Dropdown Content (Hidden by Default) */
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }

          /* Links inside the dropdown */
          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }

          /* Change color of dropdown links on hover */
          .dropdown-content a:hover {background-color: #f1f1f1}

          /* Show the dropdown menu on hover */
          .dropdown:hover .dropdown-content {
            display: block;
          }

          /* Change the background color of the dropdown button when the dropdown content is shown */
          .dropdown:hover .dropbtn {
            background-color: #3e8e41;
          }
          </style>

          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a class="dropdown-item" href="/new" onClick="">New</a>
              <a class="dropdown-item" href="/empty">Empty</a>
              <a class="dropdown-item" href="/undo" >Undo</a>
              <a class="dropdown-item" href="/redo" >Redo</a>
              <a class="dropdown-item" href="/save" >Save</a>
              <a class="dropdown-item" href="/load" >Load</a>
            </div>
          </div>
         `;
    }
}
customElements.define('custom-greeting', CustomGreeting);
