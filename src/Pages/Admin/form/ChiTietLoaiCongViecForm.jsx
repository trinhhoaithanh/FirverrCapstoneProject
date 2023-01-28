import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'
import { useEffect } from 'react';
import { formType } from '../quanLy/CongViec'

function ChiTietLoaiCongViecForm(props) {
    const { form, mode } = props
    const [disabled, setDisabled] = useState(false);



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
                    height: '60vh',
                    overflowY: 'scroll'
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
                    <Input disabled={disabled} />
                </Form.Item>
                {/* <p hidden={!disabled}>{form.getFieldsValue().id}</p> */}
                <Form.Item
                    label='tên nhóm'
                    name='tenNhom'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập tên nhóm'
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label='mã loại công việc'
                    name='maLoaiCongviec'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập mã loại công việc'
                        }
                    ]}
                >
                    <Input disabled={disabled} />
                </Form.Item>
                <Form.Item
                    label='danh sách CT loại công việc'
                    name='dsChiTietLoai'
                    rules={[
                        {
                            required: true,
                            message: 'hãy nhập CT loại công việc'
                        }
                    ]}
                >
                    <Select
                        mode="tags"
                        placeholder="Please select"
                        style={{
                            width: '100%',
                        }}
                        
                        disabled={true}
                    />
                </Form.Item>

            </Form>

        </div>
    )
}

export default ChiTietLoaiCongViecForm