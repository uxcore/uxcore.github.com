# Button

- category: Components
- subtype: Form Control
- chinese:　按钮

---

## Usage

```js
import Button from 'uxcore-button';
React.render(<div>
    <div>
        <span>{"default:"}</span>
        <Button>Confirm</Button>
    </div>
    <div>
        <span>{"size:"}</span>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
    </div>
    <div>
        <span>{"status:"}</span>
        <Button disabled>disabled</Button>
    </div>
    <div>
        <span>{"type:"}</span>
        <Button type="primary">default primary</Button>
        <Button type="secondary">secondary</Button>
    </div>
    <div>
        <span>{"add event:"}</span>
        <Button onClick={function(){alert('click me')}}>click me</Button>
    </div>
    <div>
        <h2>button group:</h2>
        <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </div>
</div>, document.getElementById('target'));
```

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|size|按钮大小(`large` `medium` `small`)|string|medium|
|type|类型(`primary` `secondary` `outline`)|string|blue|
|disabled|是否禁用(`disabled` 或 `true` `false`)|string|false|
|className|增加额外的class|string|''|