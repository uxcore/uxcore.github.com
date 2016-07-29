# 在表单元素中使用

- order: 1

在 textarea 和 input 中使用。

---

````jsx
import Mention, { TextareaEditor, InputEditor } from 'uxcore-mention';

let source = ['aaaaa', 'aabbb', 'aaccc', 'bbbcc', 'dddee', 'fffqq', 'pppaa', 'ppccc'];

function formatter(data){
    return data.map((item) => {
        return {
            text: item
        };
    });
}

ReactDOM.render(
	<Mention
		matchRange={[1, 6]}
		source={source}
		formatter={formatter}>
		<TextareaEditor
			placeholder="在此编辑" />
		<InputEditor
			placeholder="在此编辑" />
	</Mention>,
  	document.getElementById('components-mention-demo-formelement')
);
````
