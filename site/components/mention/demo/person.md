#  at人

- order: 1

at人的用法。

---

````jsx
import Mention from 'uxcore-mention';

let mockData = [
    {
        "emplId": "11111",
        "nickNameCn": "小红",
        "name": "小红",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "22222",
        "nickNameCn": "小黄",
        "name": "小黄",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "33333",
        "nickNameCn": "小白",
        "name": "小白",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "44444",
        "nickNameCn": "小黑",
        "name": "小黑",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "55555",
        "nickNameCn": "小李",
        "name": "小李",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "66666",
        "nickNameCn": "",
        "name": "小明",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "77777",
        "nickNameCn": "",
        "name": "小雷",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "88888",
        "nickNameCn": "小樱",
        "name": "小樱",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "99999",
        "nickNameCn": "小健",
        "name": "小健",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    },
    {
        "emplId": "20030",
        "nickNameCn": "小航",
        "name": "小航",
        "avatar": "//gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg"
    }
];

function getPersonData(keyword, next){
    setTimeout(function(){
        next(mockData);
    }, 100);
}

function personDataFormatter(data){
    data.forEach(function(item){
        item.displayName = item.name + (item.nickNameCn ? `(${item.nickNameCn})`: '');
    });
    return data;
}

function personPanelFormatter(data){
    return `<img src="${data.avatar}" width="25" height="25" title="${data.name}">${data.displayName} - ${data.emplId}`;
}

function personMentionFormatter(data){
    return `@${data.name}(${data.emplId})`;
}

ReactDOM.render(
    <Mention
        width="400"
        height="200"
        matchRange={[2, 6]}
        source={getPersonData}
        formatter={personDataFormatter}
        panelFormatter={personPanelFormatter}
        mentionFormatter={personMentionFormatter}>
    </Mention>,
  	document.getElementById('components-mention-demo-person')
);
````
