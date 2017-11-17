# 大指示器

- order: 4

当轮播较大时，使用大的指示器会有更好的视觉体验。

---


````css
.demo-large-arrow {
    width: 600px;
}

.code-box {
    width: 100%;
}

/* CSS END JS START*/

````


````jsx
const classnames = require('classnames');

const Carousel = require('uxcore-carousel');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ width: 1000 }}>
        <Carousel className="demo-large-arrow" autoplay pauseOnHover largeArrowsAndDots>
          <div><img src="https://img.alicdn.com/tfs/TB1b8p_aMvD8KJjy0FlXXagBFXa-533-300.jpg" style={{ width: '100%' }} /></div>
          <div><img src="https://img.alicdn.com/tfs/TB1F1h7aL6H8KJjy0FjXXaXepXa-800-450.jpg" style={{ width: '100%' }} /></div>
          <div><img src="https://img.alicdn.com/tfs/TB1clp_aMvD8KJjy0FlXXagBFXa-533-300.jpg" style={{ width: '100%' }} /></div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-carousel-demo-large-arrow'));

````

