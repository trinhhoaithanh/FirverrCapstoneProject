import React, { useState } from 'react'
import { Form, Input, DatePicker, Select, Button } from 'antd'

import { useEffect } from 'react';

import {formType} from '../quanLy/NguoiDung'

function NguoiDungForm(props) {
    const { form, mode} = props
    const [disabled, setDisabled] = useState(false);
    // const [initialValues, setInitialValues] = useState({
    //     ...initValues,
    //     birthday: initValues.birthday ? moment(initValues.birthday,'DD/MM/YYYY') : moment()
    // })

    useEffect(() => {
        setDisabled(mode === formType.DETAIL)
    }, [mode])

    return (
        <div>
            <Form
                form={form}
                name='formName'
                size='middle'
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 15,
                }}
                autoComplete="on"
                style={{
                    height:'60vh',
                    overflowY:'scroll'
                }}
            >
                <Form.Item
                    label='id'
                    name='id'
                    rules={[
                        {
                            required: true,
                            message: 'Please input id'
                        }
                    ]}
                    hidden={disabled}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                {/* <p hidden={!disabled}>{form.getFieldsValue().id}</p> */}
                <Form.Item
                    label='name'
                    name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Please input name'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='email'
                    name='email'
                    rules={[
                        {
                            required: false,
                            message: 'Please input email'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input password'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='phone'
                    name='phone'
                    rules={[
                        {
                            required: false,
                            message: 'Please input phone'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='birthday'
                    name='birthday'
                    rules={[
                        {
                            required: true,
                            message: 'Please input birthday'
                        }
                    ]}
                >
                    
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='gender'
                    name='gender'
                    rules={[
                        {
                            required: true,
                            message: 'Please input gender'
                        }
                    ]}
                >
                    <Select disabled={disabled}>
                        <Select.Option value={true}>nam</Select.Option>
                        <Select.Option value={false}>nu</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='role'
                    name='role'
                    rules={[
                        {
                            required: true,
                            message: 'Please input role'
                        }
                    ]}
                >
                    <Select disabled={disabled}>
                        <Select.Option value="ADMIN">ADMIN</Select.Option>
                        <Select.Option value="USER">USER</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='skill'
                    name='skill'
                    rules={[
                        {
                            required: false,
                            // message: 'Please input skill'
                        }
                    ]}
                >
                    <Input.TextArea rows={5} disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='certification'
                    name='certification'
                    rules={[
                        {
                            required: false,
                            // message: 'Please input certification'
                        }
                    ]}
                >
                    <Input.TextArea rows={5} disabled={disabled}/>
                </Form.Item>
            </Form>

        </div>
    )
}

export default NguoiDungForm