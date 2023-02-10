import React from 'react'
import { Modal } from 'antd'
import CongViecForm from '../form/CongViecForm';


function CongViecModal(props) {
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
                <CongViecForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default CongViecModal