import React from 'react'
import {Input , Button, Space, Table} from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import {callApi} from '../../../utils/config'

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
    const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
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
                    <Button type="primary">xem thông tin chi tiết</Button>
                    <Button type="dashed">sửa</Button>
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
            id
        })
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

    return (
        <div>
            <a>Thêm quản trị viên</a> <br /><br />
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
        </div>
    )
}
