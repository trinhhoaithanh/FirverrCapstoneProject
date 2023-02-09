import React from 'react'
import { Modal } from 'antd'
import ChiTietLoaiCongViecForm from '../form/ChiTietLoaiCongViecForm';


function ChiTietLoaiCongViecModal(props) {
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
                <ChiTietLoaiCongViecForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default ChiTietLoaiCongViecModal