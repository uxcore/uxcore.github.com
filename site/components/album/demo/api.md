# API 调用

- order: 1

通过 API 的方式，在其他组件中使用点击查看大图的功能

---

````jsx

import { Album } from 'uxcore';
import { Button } from 'uxcore';

const { Photo } = Album;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Album.show({
      photos: [
        <Photo
          src="//img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg"
          key={0}
        />,
        <Photo src="https://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png" key={1} />,
        <Photo
          src="//img.alicdn.com/imgextra/i4/927018118/TB1N0hqKFXXXXXDXXXXXXXXXXXX_!!0-tstar.jpg"
          key={2}
        />,
      ],
    });
  }


  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>API 调用</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-album-demo-api'));
````

````css
````
