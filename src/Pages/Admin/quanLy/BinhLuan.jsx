import React from 'react'
import { Input, Button, Space, Table, Form, Tooltip} from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import { callApi } from '../../../utils/config'
import BinhLuanModal from '../modal/BinhLuanModal';
import { AxiosError } from 'axios';
import Loading from '../../../Components/loading/Loading';
import { notification } from 'antd'

export const formType = {
    EDIT: 'edit',
    DETAIL: 'detail',
    ADD: 'add'
}
export default function BinhLuan() {
    const typeNotification = {
        SUCCESS: 'success',
        INFO: 'info',
        WARNING: 'warning',
        ERROR: 'error'
    }
    const [api, contextHolder] = notification.useNotification()
    const openNotification = (type, message, description) => {
        api[type]({
            message: message,
            description: description,
            className: 'custom-class',
        });
    };



    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [keySearch, setKeySearch] = useState('')
    const [pageSize, setPageSize] = useState(10)
    const [current, setCurrent] = useState(1)
    const [isModalOpen, setIsModalopen] = useState(false)
    const [modeForm, setModeForm] = useState(formType.EDIT);
    const [form] = Form.useForm();
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'mã công việc',
            dataIndex: 'maCongViec',
            key: 'maCongViec',
        },
        {
            title: 'mã người bình luận',
            dataIndex: 'maNguoiBinhLuan',
            key: 'maNguoiBinhLuan'
        },
        {
            title: 'nội dung',
            dataIndex: 'noiDung',
            key: 'noiDung'
        },
        {
            title: 'số sao',
            dataIndex: 'saoBinhLuan',
            key: 'saoBinhLuan'
        },
        
        {
            title: '',
            dataIndex: '',
            render: (_, record) => {
                return (
                    <Space wrap>
                        <Button type="primary" onClick={() => handleClickDetail(record)}>xem thông tin chi tiết</Button>
                        <Button type="dashed" onClick={() => handlleClickEdit(record)}>sửa</Button>
                        <Button type="dashed" danger onClick={() => {
                            // console.log(record.id)
                            deleteUser(record.id)
                        }}>X</Button>
                    </Space>
                )
            }
        }
    ];

    useEffect(() => {
        // eslint-disable-next-line
        searchApi(current, pageSize, keySearch)
    }, [current, pageSize, keySearch])

    const [pagination, setPagination] = useState({})

    const searchApi = async (pageIndex, pageSize, keyword) => {
        // const result = await http.get(`/api/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${ketword}`)
        try {
            // configPagination({ pageIndex, pageSize })
            setLoading(true)
            let data
            if(keyword)
                data = await callApi('get', `/api/binh-luan/lay-binh-luan-theo-cong-viec/${keyword}`)
            else 
                data = await callApi('get', '/api/binh-luan')
            setLoading(false)
            // configPagination({
            //     totalPage: data.data.content.totalRow
            // })
            setDataSource(data.data.content.map(item => {
                return {
                    ...item,
                    key: item.id
                }
            }))
        } catch (error) {
            setLoading(false)
            openNotification(typeNotification.ERROR, 'lỗi 500', 'xin lỗi vì sự cố trên')
        }
    }
    const deleteApi = async (id) => {
        try {
            setLoading(true)
            await callApi('delete', `/api/binh-luan/${id}`)
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'xóa thành công', 'xóa thành công')
        } catch (error) {
            setLoading(false)
            openNotification(typeNotification.ERROR, 'xóa thất bại', 'không đủ quyền xóa')
        }
    }
    const addApi = async () => {
        try {
            setLoading(true)
            await callApi('post', '/api/binh-luan', null, form.getFieldValue())
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'thêm thành công', 'thêm thành công')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, error.response.data.content, error.response.data.content)
        }
    }
    const detailApi = async (record) => {
        try {
            setLoading(true)
            // const result = await callApi('get', `/api/binh-luan/${id}`)
            setLoading(false)
            form.setFieldsValue(record)
        } catch (error) {
            setLoading(false)
        }
    }
    const editApi = async (id) => {
        try {
            setLoading(true)
            await callApi('put', `/api/binh-luan/${id}`, null, form.getFieldValue())
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'sửa thông tin thành công', 'sửa thông tin thành công')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, 'sửa thông tin thất bại', 'không đủ quyền sửa')
        }
    }

    const configPagination = ({ current, pageSize, totalPage }) => {
        setPagination({
            current: current,
            total: totalPage,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
                setCurrent(page)
                setPageSize(pageSize)
            },
            pageSizeOptions: ['5', '10', '15'],
            responsive: true
        })
    }

    const handleSearch = (value, event) => {
        setKeySearch(value)
        setCurrent(1)
    }

    const deleteUser = async (id) => {
        // console.log(id);
        await deleteApi(id)
        searchApi(current, pageSize, keySearch)
    }

    const handleClickAdd = () => {
        setModeForm(formType.ADD)
        openModal()
    }

    const handleClickDetail = (record) => {
        setModeForm(formType.DETAIL)
        detailApi(record)
        openModal()
    }

    const handlleClickEdit = (record) => {
        setModeForm(formType.EDIT)
        detailApi(record)
        openModal()
    }

    const openModal = () => {
        setIsModalopen(true)
    }

    const handleOk = async () => {
        if (modeForm === formType.ADD) {
            addApi()
        }
        if (modeForm === formType.EDIT) {
            await editApi(form.getFieldValue().id)
            searchApi(current, pageSize, keySearch)
        }
        setIsModalopen(false)


    }
    return (
        <div style={{ position: 'relative' }}>

            <Loading visible={loading} />
            {contextHolder}

            <br />
            <Button type="primary" onClick={handleClickAdd}>thêm bình luận</Button>
            <br /> <br />
            {/* <Space wrap>
                <Input.Search
                    placeholder='nhập vào tên công việc'
                    maxLength={100}
                    style={{ width: '500px' }}
                    onSearch={handleSearch}
                />

            </Space>  */}
            <br /><br />
            <Table
                dataSource={dataSource}
                columns={columns}
                // pagination={pagination}
                scroll={{ y: 400 }}
            />;
            <BinhLuanModal
                isModalOpen={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalopen(false)}
                form={form}
                modeForm={modeForm}
            />
        </div>
    )
}
