import React, { useState } from 'react';

function PhotoUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setSelectedImage(URL.createObjectURL(img));
        }
    };

    return (
        <div className="App">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
                <div>
                    <img src={selectedImage} alt="Uploaded" style={{ width: '300px' }} />
                </div>
            )}
        </div>
    );
}

export default PhotoUpload;
