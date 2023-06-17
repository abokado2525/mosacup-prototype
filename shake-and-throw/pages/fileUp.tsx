import style from "../styles/components/Home.module.css";
import React, { useState } from "react";


function FileUp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // 画像ファイルのプレビューを表示
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {previewImage && (
                <div>
                    <h2 className={style.move}>選択した画像のプレビュー</h2>
                    <img className={style.move} src={previewImage} alt="Preview" />

                </div>
            )}
        </div>
    );
}

export default FileUp;