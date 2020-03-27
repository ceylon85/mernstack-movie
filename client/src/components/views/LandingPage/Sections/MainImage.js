import React from 'react';

// 가장 유명한 movie를 mainImage로 받는다.
function MainImgae(props) {
    return (
        <div>
            <div>
                <div
                    style={{
                    position: 'absolute',
                    maxWidth: '500px',
                    bottom: '2rem',
                    marginLeft: '1rem'
                }}>
                    <h2 style={{
                        color: 'white'
                    }}>
                        title</h2>
                    <p
                        style={{
                        color: 'white',
                        fontSize: '1rem'
                    }}>description</p>
                </div>
            </div>
        </div>
    )
}

export default MainImgae;