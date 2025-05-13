import React, { useState } from "react"; // Import thư viện React và hook useState

export default function ColorBox() {
  // Danh sách các màu có thể chọn ngẫu nhiên
  const colors = ["red", "blue", "green", "orange", "purple", "pink", "teal"];

  // useState để lưu trạng thái màu nền của ô vuông
  const [bgColor, setBgColor] = useState("white");

  // Hàm thay đổi màu sắc ngẫu nhiên
  const handleChangeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Lấy một màu ngẫu nhiên từ danh sách
    setBgColor(randomColor); // Cập nhật trạng thái màu nền
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}> {/* Căn giữa nội dung */}
      <div
        style={{
          width: "200px", 
          height: "200px", 
          margin: "0 auto 1rem",
          backgroundColor: bgColor,
          border: "2px solid #ccc", 
          borderRadius: "8px", 
          transition: "background-color 0.3s ease", 
        }}
      ></div>
      
      {/* Nút nhấn để thay đổi màu của ô vuông */}
      <button onClick={handleChangeColor}>Đổi màu</button>
    </div>
  );
}
