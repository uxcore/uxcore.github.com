# <%= ComponentName%> <%= DemoName%> Demo

- order: <%= order%>

<%= ComponentName%> <%= DemoName%> Demo
---

````jsx

import <%= ComponentName%> from 'uxcore-<%= component_name%>';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <%= ComponentName%> <%= DemoName%> Demo
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-<%= component_name%>-demo-<%= demo_name%>'));
````

````css
````
