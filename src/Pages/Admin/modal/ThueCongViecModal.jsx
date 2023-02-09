import React from 'react'
import { Modal } from 'antd'
import ThueCongViecForm from '../form/ThueCongViecForm';


function ThueCongViecModal(props) {
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
                <ThueCongViecForm form={form} mode={modeForm} />
            </Modal>
        </div>
    )
}

export default ThueCongViecModal