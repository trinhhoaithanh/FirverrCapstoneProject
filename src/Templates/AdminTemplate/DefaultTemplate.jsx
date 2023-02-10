import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, Col, Row, Image, Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import router from '../../router';
import { history } from '../../index'
import { useSelector } from 'react-redux'
import {ACCESS_TOKEN, USER_LOGIN, removeStore} from '../../utils/config'

function DefaultTemplate() {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = router.admin.map(route => getItem(route.title, route.key))
    const headerStyle = { 
        height: '100px',
        lineHeight: '100px', 
        textAlign: 'right' 
    }
    const { userLogin } = useSelector(state => state.userReducer)

    const handleClickMenu = (item) => {
        history.push('/admin/' + item.key)
    }
    const handleLogout = () => {
        removeStore(ACCESS_TOKEN)
        removeStore(USER_LOGIN)
        history.push('/loginUser')
    }

    const renderLogoutBtn = () => {

        return (
            <div>
                <Image
                    style={{borderRadius:'25%'}}
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                
                <span>
                    &nbsp;{userLogin.user.name} | &nbsp;
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        onClick={() => handleLogout()}
                    >Logout</Button>
                </span>
            </div>
        )
    }
    return (
        <div >
            <Row>
                <Col span={18} push={5}>
                    <div style={headerStyle}>
                        {renderLogoutBtn()}
                    </div>
                    <Outlet />
                </Col>
                <Col span={5} pull={18}>
                    <h3>Dash Board</h3>
                    <Menu items={items} onClick={handleClickMenu} />
                </Col>
            </Row>

        </div>
    )
}

export default DefaultTemplate