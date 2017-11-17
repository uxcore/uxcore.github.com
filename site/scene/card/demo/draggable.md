# 区块信息展示(可拖动)

- order: 1

---

````jsx
const classnames = require('classnames');
const Form = require('uxcore-form');
const Button = require('uxcore-button');
const Dialog = require('uxcore-dialog');
const {
    InputFormField: Input,
    FormRow,
    FormRowTitle,
    Validators,
    OtherFormField,
    DateFormField,
    CascadeSelectFormField,
    SelectFormField,
    CheckboxGroupFormField,
} = Form;

const Item = CheckboxGroupFormField.Item;


class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const me = this;
    const data = this.props.data;
    return (
      <div className="templateCardItemWrap">
        <div className="templateCardItemTitle">{data.title}</div>
        <div className="templateCardItemContent">{data.content}</div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardValues: {},
      showCardDialog: false,
      cardList: [{
        title: '阿里巴巴(中国)有限公司',
        content: '浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号',
        id: (new Date()).getTime(),
      }, {
        title: '阿里巴巴(中国)有限公司阿里巴巴(中国)有限公司',
        content: '浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号浙江省杭州市余杭区文一西路969号',
        id: (new Date()).getTime() + 1,
      }],
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  showNewCardDialog() {
    this.setState({
      action: 'add',
      showCardDialog: true,
      cardValues: {},
    });
  }

  handleCard() {
    const data = this.refs.form.getValues();

    if (!data.pass) {
      return;
    }

    if (this.state.action === 'add') {
      this.state.cardList.push({
        title: data.values.cardTitle,
        content: data.values.cardContent,
        id: (new Date()).getTime(),
      });
    } else {
      const editData = this.state.editData;
      this.state.cardList.map((item) => {
        if (item.id === editData.id) {
          item.title = data.values.cardTitle;
          item.content = data.values.cardContent;
          return true;
        }
      });
    }

    this.state.showCardDialog = false;
    this.setState(this.state);
  }

  handleCancel() {
    this.setState({
      showCardDialog: false,
    });
  }

  onEditCard(data) {
    this.state.cardValues.cardTitle = data.title;
    this.state.cardValues.cardContent = data.content;
    this.state.showCardDialog = true;
    this.state.action = 'edit';
    this.state.editData = data;
    this.setState(this.state);
  }

  onRemoveCard(data) {
    Dialog.confirm({
      title: '确定删除?',
      onOk: () => {
        this.state.cardList.some((item, i) => {
          if (item.id === data.id) {
            this.state.cardList.splice(i, 1);
            return true;
          }
        });
        this.setState(this.state);
      },
    });
  }

  onDragStart(data) {
    this.state.dragItemData = data;
  }

  onDrop(data) {
    this.switchItem(this.state.dragItemData, data);
  }

  onDragEnter(e) {
    e.target.classList.add('dragOver');
  }
  onDragOver(e) {
    e.preventDefault();
  }

  onDragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('dragOver');
  }

  findItem(data) {
    let index = -1;
    this.state.cardList.some((item, i) => {
      if (item.id === data.id) {
        index = i;
        return true;
      }
    });
    return index;
  }

  switchItem(dragItem, dropItem) {
    const cardList = this.state.cardList;
    const dragIndex = this.findItem(dragItem);
    const dropIndex = this.findItem(dropItem);

    if (dragIndex < 0 || dropIndex < 0) {
            // 'error';
      return;
    }

    const item = cardList[dragIndex];
    cardList.splice(dragIndex, 1);
    cardList.splice(dropIndex, 0, item);

    this.setState(this.state);
  }

  renderCardDialog() {
    return (<Dialog ref="modal"
      visible
      className="newCardDialog"
      title="添加卡片" onCancel={this.handleCancel.bind(this)}
      footer={[
        <Button onClick={this.handleCard.bind(this)}>提 交</Button>,
        <Button onClick={this.handleCancel.bind(this)}>取 消</Button>,
      ]}
    >
      <Form ref="form" jsxvalues={this.state.cardValues}>
        <FormRowTitle jsxtitle="卡片信息" />
        <Input
          required
          jsxname="cardTitle"
          jsxlabel="标题"
          jsxrules={[
                                { validator: Validators.isNotEmpty, errMsg: '请填写标题' },
          ]}
        />
        <Input
          required
          jsxname="cardContent"
          jsxlabel="内容"
          jsxrules={[
                                { validator: Validators.isNotEmpty, errMsg: '请填写内容' },
          ]}
        />
      </Form>
    </Dialog>);
  }

  render() {
    const me = this;
    return (
      <div className="pageDemo1">
        <div className="templateCardWrap">
          <ul className="templateCardList clearfix">
            {
                            me.state.cardList.map((item, i) => (<li className="templateCardItem" draggable onDragStart={me.onDragStart.bind(me, item)} onDragEnter={me.onDragEnter} onDragOver={me.onDragOver} onDrop={me.onDrop.bind(me, item)} onDragLeave={me.onDragLeave} key={`templateCardItem${i}`}>
                              <CardItem data={item} />
                              <div className="templateCardEdit">
                                <a href="javascript:void(0);" onClick={me.onEditCard.bind(me, item)}>修改</a>
                                <a href="javascript:void(0);" onClick={me.onRemoveCard.bind(me, item)}>删除</a>
                              </div>
                            </li>))
                        }
            <li className="templateCardItem templateAddCard" onClick={me.showNewCardDialog.bind(this)}>
              <div>
                <img src={'https://img.alicdn.com/tps/TB14qDfPFXXXXclXXXXXXXXXXXX-200-200.png'} className="templateAddCardBtn" />
              </div>
              <p className="templateCardTxt">添加卡片</p>
            </li>
          </ul>
        </div>
        {
                    me.state.showCardDialog ? me.renderCardDialog() : null
                }
      </div>
    );
  }
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const me = this;
    return (<div className="pageDemo">
      <Card />
    </div>);
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-card-demo-draggable'));

/* JS END CSS START*/
````

````css
.pageDemo1 {
  width: 1000px;
  margin: 0 auto;
  background: white;
  min-height: 300px;
}

.templateCardWrap {
    overflow: hidden;
}
.templateCardWrap .clearfix:after {
    content: "";
    display: block;
    clear: both;
    width: 0; 
}
.templateCardWrap .templateCardList {
    width: calc(100% + 10px);
    margin-left: -10px;
    margin-top: -10px;
}
.templateCardWrap .templateCardItem {
    float: left;
    width: 270px;
    height: 158px;
    border: 1px solid #ccc;
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    padding: 20px 16px;
}
.templateCardWrap .templateAddCardBtn {
    display: block;
    width: 66px;
    height: 66px;
    margin: 24px auto 12px;
}
.templateCardWrap .templateCardTxt {
    text-align: center;
}
.templateCardWrap .templateAddCard {
    cursor: pointer;
}
.templateCardWrap .templateCardEdit {
    position: absolute;
    bottom: 10px;
    right: 0;
    line-height: 1;
}
.templateCardWrap .templateCardEdit a {
    text-decoration: none;
    margin-right: 10px;
    color: #2599F2;
}

.templateCardItemWrap {
    height: calc(100% - 10px);
    overflow: hidden;
}
````
