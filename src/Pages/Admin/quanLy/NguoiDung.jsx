import React from 'react'
import {Input , Button, Space, Table, Form} from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import {callApi} from '../../../utils/config'
import NguoiDungModal from '../modal/NguoiDungModal';
import { AxiosError } from 'axios';

export const formType = {
    EDIT: 'edit',
    DETAIL: 'detail',
    ADD: 'add'
}
export default function NguoiDung() {
    // const dataSource = [
    //     {
    //       "id": 1591,
    //       "name": "Cong Khanh",
    //       "email": "khanhtran1254@gmail.com",
    //       "password": "301220",
    //       "phone": "1234567890",
    //       "birthday": "30/12/2000",
    //       "avatar": "",
    //       "gender": true,
    //       "role": "USER",
    //       "skill": [
    //         "string",
    //         "HTML"
    //       ],
    //       "certification": [
    //         "string",
    //         "Udemy"
    //       ],
    //       "bookingJob": []
    //     },
    //     {
    //       "id": 1599,
    //       "name": "AlaBoom",
    //       "email": "alaboom@gmail.com",
    //       "password": "alaboom123",
    //       "phone": "0909123456",
    //       "birthday": "01/11/2000",
    //       "avatar": "",
    //       "gender": false,
    //       "role": "ADMIN",
    //       "skill": [],
    //       "certification": [],
    //       "bookingJob": []
    //     },
    //     {
    //       "id": 1601,
    //       "name": "Hoa Mai",
    //       "email": "hoamai123@gmail.com",
    //       "password": "hoamai123",
    //       "phone": "0909123456",
    //       "birthday": "29/10/2019",
    //       "avatar": "",
    //       "gender": false,
    //       "role": "ADMIN",
    //       "skill": [],
    //       "certification": [],
    //       "bookingJob": []
    //     },
    //     {
    //       "id": 1606,
    //       "name": "khaidoa",
    //       "email": "quangkhai09011@gmail.com",
    //       "password": "Quangkhai1",
    //       "phone": "",
    //       "birthday": "2022/11/21",
    //       "avatar": "",
    //       "gender": true,
    //       "role": "USER",
    //       "skill": [],
    //       "certification": [],
    //       "bookingJob": []
    //     },
    //     {
    //       "id": 1610,
    //       "name": "Ngan Ha",
    //       "email": "nganha@gmail.com",
    //       "password": "nganha123",
    //       "phone": "0909123456",
    //       "birthday": "01/11/2010",
    //       "avatar": "",
    //       "gender": false,
    //       "role": "ADMIN",
    //       "skill": [],
    //       "certification": [],
    //       "bookingJob": []
    //     }
    //   ];
    
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
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '',
        dataIndex: '',
        render: (_, record) =>{
            return (
                <Space wrap>
                    <Button type="primary" onClick={() => handleClickDetail(record.id)}>xem thông tin chi tiết</Button>
                    <Button type="dashed" onClick={() => handlleClickEdit(record.id)}>sửa</Button>
                    <Button type="dashed" danger onClick={() =>{
                        // console.log(record.id)
                        deleteUser(record.id)
                    }}>X</Button>
                </Space>
            )
        }
    }
    ];

    useEffect(()=>{
        searchApi(current, pageSize, keySearch)
    },[current, pageSize, keySearch])

    const [pagination, setPagination] = useState({})

    const searchApi = async(pageIndex,pageSize,keyword) =>{
        // const result = await http.get(`/api/users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${ketword}`)
        configPagination({pageIndex, pageSize})
        const data = await callApi('get', '/api/users/phan-trang-tim-kiem', {
            pageIndex,
            pageSize,
            keyword
        })
        configPagination({
            totalPage: data.data.content.totalRow
        })
        setDataSource(data.data.content.data.map(item => {
            return {
                ...item,
                key: item.id
            }
        }))
    }
    const deleteApi = async(id)=>{
        await callApi('delete', '/api/users', {
            // id
        })
    }
    const addApi = async() =>{
        try {
            const result = await callApi('post', '/api/users',null,form.getFieldValue())
        } catch (error) {
            if(error instanceof AxiosError)
                alert(error.response.data.content);
        }
    }
    const detailApi = async(id) =>{
        const result = await callApi('get', `/api/users/${id}`)
        
        form.setFieldsValue(result.data.content)

    }
    const editApi = async(id) =>{
        try {
            const result = await callApi('put', `/api/users/${id}`,null,form.getFieldValue())
        } catch (error) {
            if(error instanceof AxiosError)
                console.log(error);
        }
    }

    const configPagination = ({current,pageSize, totalPage})=>{
        setPagination({
            current: current,
            total: totalPage,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
                setCurrent(page)
                setPageSize(pageSize)
            },
            pageSizeOptions: ['5', '10' , '15'],
            responsive: true
        })
    }

    const handleSearch = (value, event) => {
        setKeySearch(value)
        setCurrent(1)
    }

    const deleteUser = async(id) => {
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

    const openModal = () =>{
        setIsModalopen(true)
    }

    const handleOk = async () => {
        if(modeForm===formType.ADD){
            addApi()
        }
        if(modeForm===formType.EDIT){
            await editApi(form.getFieldValue().id)
            searchApi(current,pageSize,keySearch)
        }
        setIsModalopen(false)


    }
    return (
        <div>
            <br />
            <Button type="primary" onClick={handleClickAdd}>Thêm quản trị viên</Button>
            <br /> <br />
            <Space wrap>
                <Input.Search 
                    placeholder='nhập vào tài khoản họ tên người dùng' 
                    maxLength={100} 
                    style={{width:'500px'}}
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
            <NguoiDungModal 
                isModalOpen={isModalOpen} 
                onOk={handleOk} 
                onCancel={() => setIsModalopen(false)}
                form={form}
                modeForm={modeForm}
            />
        </div>
    )
}
