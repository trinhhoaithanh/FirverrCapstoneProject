import React from 'react'
import { Modal } from 'antd'
import BinhLuanForm from '../form/BinhLuanForm';


function BinhLuanModal(props) {
    const { isModalOpen, onOk, onCancel, form, modeForm} = props

    return (
        <div>
            <Modal
                title={modeForm}
                centered
                open={isModalOpen}
                onOk={onOk}
                width={1000}
                destroyOnClose={true}
                onCancel={onCancel}
            >
                <BinhLuanForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default BinhLuanModal