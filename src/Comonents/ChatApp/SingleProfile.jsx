import React from 'react';

const SingleProfile = ({ profileinfo }) => {
    return (
        <div className='flex gap-3 '>

            <div className="avatar mb-3">
                <div className="w-10 rounded-full">
                    <img src={profileinfo.image}  />
                   
                </div>
            </div>

            <h3 className='mt-2'>{profileinfo.name}</h3>
        </div>
    );
};

export default SingleProfile;