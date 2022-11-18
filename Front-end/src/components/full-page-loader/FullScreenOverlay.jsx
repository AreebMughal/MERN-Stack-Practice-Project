import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import LoaderContext from '../../context/loader-context';
import './loader.css';

const FullScreenOverlay = (props) => {


    return (
        <>
            {/* ReactDOM.createPortal(
                    <div id='cover' className='grid h-screen place-items-center'>
                        {props.children}
                    </div>, document.getElementById('full-page-loader')
                ) */}
            <div id='cover' className='grid h-screen place-items-center'>
                {props.children}
            </div>

        </>
    );
}

export default FullScreenOverlay;
