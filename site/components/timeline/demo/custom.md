# 自定义线条颜色

- order: 1

自定义线条颜色

---

````jsx

import { Timeline } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Timeline>
          <Timeline.Item>
            <p>2016-10-25</p>
            <p>content1</p>
            <p>content1</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>2016-10-26</p>
            <p>content2</p>
            <p>content2</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p>2016-10-27</p>
            <p>content3</p>
            <p>content3</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>2016-10-28</p>
            <p>content4</p>
            <p>content4</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-timeline-demo-custom'));
````
