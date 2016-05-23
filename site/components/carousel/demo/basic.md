# 基本使用

- order: 0

---

````css
.demo h3 {
  background: blue;
  color: #fff;
  height:200px;
  font-size: 36px;
  line-height: 200px;
  position: relative;
  text-align: center;
}

.demo {
    width: 1000px;
    height:200px;
    margin:20px auto 0;
}

.kuma-carousel .slick-next:before {
    // font-family: kuma;
    // font-size: 16px;
    // color: black;
    // content: '\e643';
}

/* CSS END JS START*/

````


````jsx
let classnames = require('classnames');

let Carousel = require('uxcore-carousel');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="kuma-carousel">
                    <button type="button" data-role="none" className="slick-next" style={{
                        display: 'block'
                    }}> Next</button>
                </div>
                <Carousel className="demo" autoplay={true} pauseOnHover={true}>
                    <h3>1</h3>
                    <h3>2</h3>
                    <h3>3</h3>
                </Carousel>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-carousel-demo-basic'));

````

