# button group

- order: 4

---

````jsx
var uxbutton = require('uxcore-button');
var Button = uxbutton.Button;
var ButtonGroup = uxbutton.ButtonGroup;

React.render(
	<div>
		<ButtonGroup>
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>
		<br/>
		<ButtonGroup>
			<Button size="small" color="orange">Left</Button>
			<Button size="small" color="orange">Middle</Button>
			<Button size="small" color="orange">Middle</Button>
			<Button size="small" color="orange">Right</Button>
		</ButtonGroup>
	</div>
, document.getElementById('css-button-demo-buttongroup'));
````
