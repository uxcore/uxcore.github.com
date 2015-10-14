#  基本用法

- order: 0

最简单的用法。

---

````jsx
import Mention from 'uxcore-mention';

function formatter(data){
    return data.map((item) => {
        return {
            text: item
        };
    });
}
let source = ['aaaaa', 'aabbb', 'aaccc', 'bbbcc', 'dddee', 'fffqq', 'pppaa', 'ppccc'];

ReactDOM.render(
	<Mention
  	  width="300"
  	  height="150"
  	  matchRange={[1, 6]}
  	  source={source}
  	  formatter={formatter}>
  	  default content
    </Mention>,
  	document.getElementById('components-mention-demo-simple')
);
````
