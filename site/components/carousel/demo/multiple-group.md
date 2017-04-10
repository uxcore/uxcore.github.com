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
                <Carousel className="demo-multiple" autoplay pauseOnHover slidesToShow={3} slidesToScroll={3}>
                    <div style={{margin: '0px 2px'}}><img src="http://www.wallcoo.com/human/City_Night_Scene_02/wallpapers/1680x1050/City_Night_Scene_photography_L10_30.jpg" style={{width: '100%'}} /></div>
                    <div style={{margin: '0px 2px'}}><img src="http://img5.imgtn.bdimg.com/it/u=3349768475,1559424970&fm=21&gp=0.jpg" style={{width: '100%'}} /></div>
                    <div style={{margin: '0px 2px'}}><img src="http://www.wallcoo.com/nature/beautiful_nature/wallpapers/1440x900/beautiful_nature_8433868.jpg" style={{width: '100%'}} /></div>
                    <div style={{margin: '0px 2px'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492084455&di=cb9117133fb7743cde278f746a7acb99&imgtype=jpg&er=1&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2FFB%2F28%2FrBACFFHs2LKRyBHRAAOL2yRa9PY192.jpg" style={{width: '100%'}} /></div>
                    <div style={{margin: '0px 2px'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491489840544&di=b7731be39b1048bf5c7b6f1984b5f3b5&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Ff3%2F02%2Fd%2F112.jpg" style={{width: '100%'}} /></div>
                    <div style={{margin: '0px 2px'}}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491489855424&di=581e5fb8de019cd02d51a5fe1732959c&imgtype=0&src=http%3A%2F%2Fh9.86.cc%2Fwalls%2F20160309%2F1440x900_abed1184e563a22.jpg" style={{width: '100%'}} /></div>
                </Carousel>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-carousel-demo-multiple-group'));

````

