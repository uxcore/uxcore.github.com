# 在tinymce中使用

- order: 2

在 tinymce 中使用。

---

````jsx
import Tinymce from 'uxcore-tinymce';
import Mention, { TinymceMention } from 'uxcore-mention';

const mockData = (function () {
  let size = 8,
    data = [];
  while (size -= 1) {
    data.push({
      emplId: new Array(6).join(size),
      nickNameCn: `昵称${size + 2}`,
      name: `名字${size + 1}`,
      avatar: '//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
    });
  }
  return data;
}());

function getPersonData(keyword, next) {
  setTimeout(() => {
    next(mockData);
  }, 100);
}

function personDataFormatter(data) {
  data.forEach((item) => {
    item.displayName = item.name + (item.nickNameCn ? `(${item.nickNameCn})` : '');
  });
  return data;
}

function personMentionFormatter(data) {
  return `@${data.name}(${data.emplId})`;
}

function personPanelFormatter(data) {
  return `<img src="${data.avatar}" width="25" height="25" title="${data.name}">${data.displayName} - ${data.emplId}`;
}

ReactDOM.render(
	                                        <TinymceMention
  insertMode={'TEXT_NODE'}
  source={getPersonData}
  formatter={personDataFormatter}
  mentionFormatter={personMentionFormatter}
  panelFormatter={personPanelFormatter}
                                       >
  <Tinymce
    placeholder={'在此编辑'}
  />
</TinymceMention>,
  	document.getElementById('components-mention-demo-tinymce')
);
````
