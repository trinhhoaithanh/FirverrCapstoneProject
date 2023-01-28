import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, Col, Row } from 'antd'
import router from '../../router';
import { history } from '../../index'

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

    const handleClickMenu = (item) => {
        history.push('/admin/'+item.key)
    }
    return (
        <div >
            <Row>
                <Col span={18} push={6}>
                    
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