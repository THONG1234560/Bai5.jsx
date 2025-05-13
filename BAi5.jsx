import { useState, useEffect } from "react";

const ImagePreview = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageSrc); // Xóa URL ảnh cũ khi có ảnh mới
    };
  }, [imageSrc]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        setImageSrc(reader.result); // Cập nhật hình ảnh mới
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && <img src={imageSrc} alt="Preview" style={{ maxWidth: "300px", marginTop: "10px" }} />}
    </div>
  );
};

export default ImagePreview;
