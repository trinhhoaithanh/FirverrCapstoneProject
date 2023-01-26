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
                    hidden={disabled}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                {/* <p hidden={!disabled}>{form.getFieldsValue().id}</p> */}
                <Form.Item
                    label='tên công việc'
                    name='tenCongViec'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập tên công việc'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='đánh giá'
                    name='danhGia'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập đánh giá'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='giá tiền'
                    name='giaTien'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập giá tiền'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='mô tả'
                    name='moTa'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mô tả'
                        }
                    ]}
                >
                    <Input.TextArea rows={5} disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='mã chi tiết công việc'
                    name='maChiTietLoaiCongViec'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mã chi tiết công việc'
                        }
                    ]}
                >
                    
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='mô tả ngắn gọn'
                    name='moTaNgan'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mô tả ngắn gọn'
                        }
                    ]}
                >
                    <Input.TextArea rows={5} disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='sao công việc'
                    name='saoCongViec'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập sao công việc'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                
            </Form>

        </div>
    )
}

export default CongViecForm