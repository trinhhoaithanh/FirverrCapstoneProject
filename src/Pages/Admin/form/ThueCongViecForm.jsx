import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'
import { useEffect } from 'react';
import {formType} from '../quanLy/CongViec'

function CongViecForm(props) {
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
                            message: 'hãy nhập id'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                {/* <p hidden={!disabled}>{form.getFieldsValue().id}</p> */}
                <Form.Item
                    label='mã công việc'
                    name='maCongViec'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mã công việc'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='mã người thuê'
                    name='maNguoiThue'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mã người thuê'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='ngày thuê'
                    name='ngayThue'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập ngày thuê'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='trạng thái công việc'
                    name='hoanThanh'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mô tả'
                        }
                    ]}
                >
                    <Select disabled={disabled}>
                        <Select.Option value={true}>đã hoàn thành</Select.Option>
                        <Select.Option value={false}>chưa hoàn thành</Select.Option>
                    </Select>
                </Form.Item>
                
            </Form>

        </div>
    )
}

export default CongViecForm