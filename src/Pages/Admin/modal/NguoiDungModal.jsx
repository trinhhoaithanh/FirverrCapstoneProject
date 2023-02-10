import React from 'react'
import { Modal } from 'antd'
import NguoiDungForm from '../form/NguoiDungForm';


function NguoiDungModal(props) {
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
                <NguoiDungForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default NguoiDungModal