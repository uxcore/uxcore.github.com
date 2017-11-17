# 多模块轮播（成组）

- order: 3

---

````css
.demo-multiple {
    width: 1000px;
    height: 225px;
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
    const images = [
      'https://img.alicdn.com/tfs/TB1.kR0aTnI8KJjy0FfXXcdoVXa-400-225.jpg',
      'https://img.alicdn.com/tfs/TB1HSBZaIrI8KJjy0FhXXbfnpXa-400-225.jpg',
      'https://img.alicdn.com/tfs/TB1GmBZaIrI8KJjy0FhXXbfnpXa-400-225.jpg',
      'https://img.alicdn.com/tfs/TB1mYJ_aLDH8KJjy1XcXXcpdXXa-400-225.jpg',
      'https://img.alicdn.com/tfs/TB11MV_aLDH8KJjy1XcXXcpdXXa-400-225.jpg',
      'https://img.alicdn.com/tfs/TB11Op4aMnD8KJjy1XdXXaZsVXa-400-225.jpg',
    ];
    return (
      <div style={{ width: 1000 }}>
        <Carousel className="demo-multiple" autoplay pauseOnHover slidesToShow={3} slidesToScroll={3}>
          {images.map(url => (
            <div style={{ margin: '0px 2px' }}><img src={url} style={{ width: '100%' }} /></div>
                        ))}
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-carousel-demo-multiple-group'));

````

