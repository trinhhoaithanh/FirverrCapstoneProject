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
                    label='mã người bình luận'
                    name='maNguoiBinhLuan'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mã người bình luận'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='ngày bình luận'
                    name='ngayBinhLuan'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập ngày bình luận'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='nội dung'
                    name='noiDung'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mô tả'
                        }
                    ]}
                >
                    <Input disabled={disabled}/>
                </Form.Item>
                <Form.Item
                    label='số sao'
                    name='saoBinhLuan'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập số sao'
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