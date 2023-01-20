import React, {useState} from 'react'
import { Modal } from 'antd'
import { useEffect } from 'react';
import NguoiDungForm from '../form/NguoiDungForm';
import {formType} from '../quanLy/NguoiDung'


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