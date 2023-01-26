import React from 'react'
import { Input, Button, Space, Table, Form, Tooltip} from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import { callApi } from '../../../utils/config'
import CongViecModal from '../modal/CongViecModal';
import { AxiosError } from 'axios';
import Loading from '../../../components/loading/Loading';
import { notification } from 'antd'

export const formType = {
    EDIT: 'edit',
    DETAIL: 'detail',
    ADD: 'add'
}
export default function CongViec() {
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
            title: 'Ten Cong Viec',
            dataIndex: 'tenCongViec',
            key: 'tenCongViec',
        },
        {
            title: 'Danh Gia',
            dataIndex: 'danhGia',
            key: 'danhGia',
        },
        {
            title: 'Gia Tien',
            dataIndex: 'giaTien',
            key: 'giaTien',
        },
        {
            title: 'maChiTietLoaiCongViec',
            dataIndex: 'maChiTietLoaiCongViec',
            key: 'maChiTietLoaiCongViec',
        },
        {
            title: 'Mo Ta Ngan',
            dataIndex: 'moTaNgan',
            key: 'moTaNgan',
            render: (_, record) => {
                if(record.moTaNgan.length<25) return <span>{record.moTaNgan}</span>
                return (
                    <Tooltip title={record.moTaNgan}>
                        <span>{record.moTaNgan?.slice(0,25)} ...</span>
                    </Tooltip>
                )
            }
        },
        {
            title: 'Sao Cong Viec',
            dataIndex: 'saoCongViec',
            key: 'saoCongViec',
        },
        {
            title: '',
            dataIndex: '',
            render: (_, record) => {
                return (
                    <Space wrap>
                        <Button type="primary" onClick={() => handleClickDetail(record.id)}>xem thông tin chi tiết</Button>
                        <Button type="dashed" onClick={() => handlleClickEdit(record.id)}>sửa</Button>
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
            configPagination({ pageIndex, pageSize })
            setLoading(true)
            const data = await callApi('get', '/api/cong-viec/phan-trang-tim-kiem', {
                pageIndex,
                pageSize,
                keyword
            })
            setLoading(false)
            configPagination({
                totalPage: data.data.content.totalRow
            })
            setDataSource(data.data.content.data.map(item => {
                return {
                    ...item,
                    key: item.id
                }
            }))
        } catch (error) {
            setLoading(false)
        }
    }
    const deleteApi = async (id) => {
        try {
            setLoading(true)
            await callApi('delete', '/api/cong-viec', {
                // id
            })
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'xóa thành công', 'xóa thành công')
        } catch (error) {
            setLoading(false)
            openNotification(typeNotification.ERROR, 'xóa thất bại', 'xóa thất bại')
        }
    }
    const addApi = async () => {
        try {
            setLoading(true)
            await callApi('post', '/api/cong-viec', null, form.getFieldValue())
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'thêm thành công', 'thêm thành công')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, error.response.data.content, error.response.data.content)
        }
    }
    const detailApi = async (id) => {
        try {
            setLoading(true)
            const result = await callApi('get', `/api/cong-viec/${id}`)
            setLoading(false)
            form.setFieldsValue(result.data.content)
        } catch (error) {
            setLoading(false)
        }
    }
    const editApi = async (id) => {
        try {
            setLoading(true)
            await callApi('put', `/api/cong-viec/${id}`, null, form.getFieldValue())
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'sửa thông tin thành công', 'sửa thông tin thành công')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, 'sửa thông tin thất bại', 'sửa thông tin thất bại')
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

    const handleClickDetail = (id) => {
        setModeForm(formType.DETAIL)
        detailApi(id)
        openModal()
    }

    const handlleClickEdit = (id) => {
        setModeForm(formType.EDIT)
        detailApi(id)
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
            <Button type="primary" onClick={handleClickAdd}>Thêm công việc</Button>
            <br /> <br />
            <Space wrap>
                <Input.Search
                    placeholder='nhập vào tên công việc'
                    maxLength={100}
                    style={{ width: '500px' }}
                    onSearch={handleSearch}
                />
                {/* <Button type="primary">tìm</Button> */}

            </Space> <br /><br />
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                scroll={{ y: 400 }}
            />;
            <CongViecModal
                isModalOpen={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalopen(false)}
                form={form}
                modeForm={modeForm}
            />
        </div>
    )
}
