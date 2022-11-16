import React from 'react';
import { BeatLoader } from 'react-spinners';
import FullScreenOverlay from './FullScreenOverlay';

const LoaderBeat = () => {
    return (
        <FullScreenOverlay>
            <div className='h-15 py-4 pt-5 px-5 w-fit bg-white rounded'>
                <BeatLoader
                    color="#00ddb1"
                    loading
                    margin={3}
                    size={10}
                    speedMultiplier={1}
                />
            </div>
        </FullScreenOverlay>
    );
}

export default LoaderBeat;
