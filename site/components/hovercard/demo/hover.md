#  悬浮弹出

- order: 0

悬浮弹出。

---

````jsx
import {Button} from 'uxcore-button';
import Hovercard from 'uxcore-hovercard';

const userInfo = {
    "connection": "bilateral",
    "loginUserId": "85377",
    "emailAddr": "hanchao.shc@alibaba-inc.com",
    "jobDesc": "资深前端开发工程师",
    "aliWW": "",
    "tbWW": "九神",
    "extensionPhone": "81178854",
    "travelInfo": "",
    "havanaId": 1804320196,
    "emplId": "67732",
    "nickNameCn": "九神",
    "hrStatus": "A",
    "photoPath": "tfscom\/TB1rddnIpXXXXbBXpXXXXXXXXXX.tfsprivate",
    "deptEnName": "",
    "pinyinNick": "jiushen",
    "deptDesc": "信息平台事业部-EHR-前端开发",
    "orderNum": "",
    "virtMobile": "",
    "pinyin2": "SHAO Hanchao",
    "mobilePhone": "15088618860",
    "jobSubCount": 0,
    "email": "",
    "officePhone": "",
    "deptId": "",
    "hasTeam": false,
    "leader": false,
    "jobTeamCount": 0,
    "name": "邵寒超",
    "id": "67732",
    "avatar": "\/photo\/67732.jpg?1401777321",
    "avatarBig": "",
    "pinyin": "shaohanchao"
};

React.render(
	<Hovercard emplId={72053} userInfo={userInfo}>
        <Button>悬浮弹出</Button>
    </Hovercard>,
  	document.getElementById('components-hovercard-demo-hover')
);
````
