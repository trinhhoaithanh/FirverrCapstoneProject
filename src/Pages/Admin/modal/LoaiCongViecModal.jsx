import React from 'react'
import { Modal } from 'antd'
import LoaiCongViecForm from '../form/LoaiCongViecForm';


function LoaiCongViecModal(props) {
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
                <LoaiCongViecForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default LoaiCongViecModal