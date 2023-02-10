import React from 'react'
import '../../assets/css/loading.css'

function Loading(props) {
    const {visible} = props 
    return visible? (
        <div
            style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1000' }}
            className='overlay'

        >
            <div >Loading</div>
        </div>
    ): null
}

export default Loading