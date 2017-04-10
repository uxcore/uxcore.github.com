# 淡入淡出

- order: 1

---

````css
.demo {
    width: 400px;
    height: 225px;
}

.code-box {
    width: 100%;
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
            <div style={{width: 1000}}>
                <Carousel className="demo" autoplay pauseOnHover fade>
                    <div><img src="http://www.wallcoo.com/human/City_Night_Scene_02/wallpapers/1680x1050/City_Night_Scene_photography_L10_30.jpg" style={{width: '100%'}} /></div>
                    <div><img src="http://img5.imgtn.bdimg.com/it/u=3349768475,1559424970&fm=21&gp=0.jpg" style={{width: '100%'}} /></div>
                    <div><img src="http://www.wallcoo.com/nature/beautiful_nature/wallpapers/1440x900/beautiful_nature_8433868.jpg" style={{width: '100%'}} /></div>
                </Carousel>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-carousel-demo-fade'));

````

