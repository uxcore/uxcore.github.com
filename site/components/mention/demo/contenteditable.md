# 在contenteditable容器中使用

- order: 0

可在contenteditable容器中使用。

---

````jsx
import Mention, { ContenteditableEditor } from 'uxcore-mention';

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
		<ContenteditableEditor placeholder="在此编辑" />
	</Mention>,
  	document.getElementById('components-mention-demo-contenteditable')
);
````
