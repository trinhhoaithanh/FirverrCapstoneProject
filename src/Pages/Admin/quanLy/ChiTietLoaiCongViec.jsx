import React from 'react'
import { Input, Button, Space, Table, Form, Tooltip, Image} from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import { callApi } from '../../../utils/config'
import ChiTietLoaiCongViecModal from '../modal/ChiTietLoaiCongViecModal';
import { AxiosError } from 'axios';
import Loading from '../../../Components/loading/Loading';
import { notification } from 'antd'

export const formType = {
    EDIT: 'edit',
    DETAIL: 'detail',
    ADD: 'add'
}
export default function ChiTietLoaiCongViec() {
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
            title: 'Ten Nhom',
            dataIndex: 'tenNhom',
            key: 'tenNhom',
        },
        {
            title: 'Hinh Anh',
            dataIndex: 'hinhAnh',
            render: (_,record) =>{
                return < Image 
                    width={100}
                    src= {record.hinhAnh}
                />
            }
        },
        {
            title: 'Ma Loai Cong Viec',
            dataIndex: 'maLoaiCongviec',
            key: 'maLoaiCongviec',
        },
        {
            title: '',
            dataIndex: '',
            render: (_, record) => {
                return (
                    <Space wrap>
                        <Button type="primary" onClick={() => handleClickDetail(record.id)}>xem th??ng tin chi ti???t</Button>
                        <Button type="dashed" onClick={() => handlleClickEdit(record.id)}>s???a</Button>
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
            const data = await callApi('get', '/api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem', {
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
            await callApi('delete', `/api/chi-tiet-loai-cong-viec/${id}`)
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'x??a th??nh c??ng', 'x??a th??nh c??ng')
        } catch (error) {
            setLoading(false)
            openNotification(typeNotification.ERROR, 'x??a th???t b???i', 'kh??ng ????? quy???n x??a')
        }
    }
    const addApi = async () => {
        try {
            setLoading(true)
            await callApi('post', '/api/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai', null, {
                ...form.getFieldValue(),
                'tenChiTiet': form.getFieldValue().tenNhom
            })
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 'th??m th??nh c??ng', 'th??m th??nh c??ng')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, error.response.data.content, error.response.data.content)
        }
    }
    const detailApi = async (id) => {
        try {
            setLoading(true)
            const result = await callApi('get', `/api/chi-tiet-loai-cong-viec/${id}`)
            setLoading(false)
            
            form.setFieldsValue({...result.data.content, dsChiTietLoai: result.data.content.dsChiTietLoai?.map((ct) => {
                return {
                    label: ct.tenChiTiet,
                    value: String(ct.id),
                }
            })})
        } catch (error) {
            setLoading(false)
        }
    }
    const editApi = async (id) => {
        try {
            setLoading(true)
            await callApi('put', `/api/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${id}`, null, {
                ...form.getFieldValue(),
                'tenChiTiet': form.getFieldValue().tenNhom
            })
            setLoading(false)
            openNotification(typeNotification.SUCCESS, 's???a th??ng tin th??nh c??ng', 's???a th??ng tin th??nh c??ng')
        } catch (error) {
            setLoading(false)
            if (error instanceof AxiosError)
                openNotification(typeNotification.ERROR, 's???a th??ng tin th???t b???i', 'kh??ng ????? quy???n s???a')
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
            <Button type="primary" onClick={handleClickAdd}>Th??m nh??m chi ti???t c??ng vi???c</Button>
            <br /> <br />
            <Space wrap>
                <Input.Search
                    placeholder='nh???p v??o t??n nh??m chi ti???t c??ng vi???c'
                    maxLength={100}
                    style={{ width: '500px' }}
                    onSearch={handleSearch}
                />
                {/* <Button type="primary">t??m</Button> */}

            </Space> <br /><br />
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                scroll={{ y: 400 }}
            />;
            <ChiTietLoaiCongViecModal
                isModalOpen={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalopen(false)}
                form={form}
                modeForm={modeForm}
            />
        </div>
    )
}
