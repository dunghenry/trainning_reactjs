import React from 'react';

const PartFive = () => {
    const [avatar, setAvatar] = React.useState('');
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    };
    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar?.preview);
        };
    }, [avatar]);
    return (
        <div>
            <h3>PartFive</h3>
            {avatar?.preview && <img width="50%" height="10%" src={avatar?.preview} alt="Avatar" />}
            <input type="file" onChange={handlePreviewAvatar} />
        </div>
    );
};

export default PartFive;
