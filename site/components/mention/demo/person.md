#  at人

- order: 1

at人的用法。

---

````jsx
import Mention from 'uxcore-mention';

let mockData = [
    {
        "emplId": "38900",
        "nickNameCn": "沧竹",
        "name": "WANG XIONG",
        "avatar": "//work.alibaba-inc.com/photo/38900.jpg"
    },
    {
        "emplId": "45358",
        "nickNameCn": "秦予",
        "name": "WANG QINYU",
        "avatar": "//work.alibaba-inc.com/photo/45358.jpg?1361881993"
    },
    {
        "emplId": "45924",
        "nickNameCn": "",
        "name": "WANG LEI",
        "avatar": "//work.alibaba-inc.com/photo/45924.jpg?1363620243"
    },
    {
        "emplId": "67471",
        "nickNameCn": "",
        "name": "WANG, Haiyang",
        "avatar": "//work.alibaba-inc.com/photo/67471.jpg"
    },
    {
        "emplId": "68699",
        "nickNameCn": "",
        "name": "WANG, Yan",
        "avatar": "//work.alibaba-inc.com/photo/68699.jpg"
    },
    {
        "emplId": "71821",
        "nickNameCn": "",
        "name": "WANG, Yinghua",
        "avatar": "//work.alibaba-inc.com/photo/71821.jpg?1404355781"
    },
    {
        "emplId": "58",
        "nickNameCn": "",
        "name": "王志雷",
        "avatar": "//work.alibaba-inc.com/photo/58.jpg?1378781324"
    },
    {
        "emplId": "83",
        "nickNameCn": "纯臻",
        "name": "王颖",
        "avatar": "//work.alibaba-inc.com/photo/83.jpg"
    },
    {
        "emplId": "144",
        "nickNameCn": "王建勋",
        "name": "王建勋",
        "avatar": "//work.alibaba-inc.com/photo/144.jpg"
    },
    {
        "emplId": "158",
        "nickNameCn": "悦航",
        "name": "王珏",
        "avatar": "//work.alibaba-inc.com/photo/158.jpg"
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
