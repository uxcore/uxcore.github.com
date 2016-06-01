import React from 'react';
import Form from 'uxcore-form';
import Button from 'uxcore-button';

const {
    InputFormField: Input,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    RadioGroupFormField,
    CheckboxGroupFormField
} = Form;
const CheckboxItem = CheckboxGroupFormField.Item;
const RadioItem = RadioGroupFormField.Item;

export default class FormDemo extends React.Component {
    render() {
        return (
            <Form ref="form">
                <Input jsxname="theme" jsxlabel="单行文本"  jsxplaceholder="Placeholder"/>
                <RadioGroupFormField jsxname="fruit" jsxlabel="单选框" jsxflex={1}>
                    <RadioItem value="apple" text="Apple"/>
                    <RadioItem value="orange" text="Orange"/>
                    <RadioItem value="watermelon" text="Watermelon"/>
                </RadioGroupFormField>
                <CheckboxGroupFormField jsxname="checkbox" jsxlabel="复选框">
                    <CheckboxItem value="air" text="Sky"/>
                    <CheckboxItem value="sea" text="Sea"/>
                </CheckboxGroupFormField>
                <TextArea jsxname="content" jsxlabel="多行文本" />
                <ButtonGroupFormField>
                    <Button size="medium">提交</Button>
                    <Button size="medium" type="outline">保存</Button>
                    <Button size="medium" type="secondary">关闭</Button>
                </ButtonGroupFormField>
            </Form>
        );
    }
} 