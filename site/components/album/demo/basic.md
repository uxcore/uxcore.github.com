# 基本使用

- order: 0

基本用法。

---

````jsx

import Album, { Photo } from 'uxcore-album';
import Form from 'uxcore-form';

const { SwitchFormField, SelectFormField, FormRow } = Form;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        thumbPlacement: 'right',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    this.setState({
      values,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Form className="demo-control" jsxvalues={this.state.values} jsxonChange={this.handleChange}>
            <SwitchFormField jsxlabel="显示缩略图" jsxname="enableThumbs" />
            <SelectFormField jsxlabel="缩略图位置" jsxname="thumbPlacement" jsxdata={{
              right: 'right',
              left: 'left',
              top: 'top',
              bottom: 'bottom',
            }} jsxshow={!!this.state.values.enableThumbs}
            />
          </Form>
        </div>
        <Album width={400} height={200} enableKeyBoardControl {...this.state.values}>
          <Photo src="//img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg" key={0} />
          <Photo src="https://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png" key={1} />
          <Photo src="//img.alicdn.com/imgextra/i4/927018118/TB1N0hqKFXXXXXDXXXXXXXXXXXX_!!0-tstar.jpg" key={2} />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1C799LFXXXXaiXpXXXXXXXXXX_!!0-tstar.jpg" key={3} />
          <Photo src="https://img.alicdn.com/imgextra/i1/290551947/TB1p81JLFXXXXXXaXXXXXXXXXXX_!!0-tstar.jpg" key={4} />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1W.ZrLpXXXXbMXpXXXXXXXXXX_!!0-tstar.jpg" key={5} />
          <Photo src="https://img.alicdn.com/imgextra/i1/673400424/TB1Jze1KXXXXXcfXFXXXXXXXXXX_!!673400424-0-tstar.jpg" key={6} />
          <Photo src="https://img.alicdn.com/imgextra/i4/673400424/TB1d2PkKXXXXXbiXXXXXXXXXXXX_!!673400424-0-tstar.jpg" key={7} />
        </Album>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-album-demo-basic'));
````

````css
.demo-control  {
  width: 400px;
}

````
