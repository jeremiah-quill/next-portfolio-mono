import { useEffect, useState } from "react";

const GalleryAdminPage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    [...selectedImages].map((image) => {
      createNewGalleryImage(image);
    });
  };

  const handleChange = (e: any) => {
    setSelectedImages(e.target.files);
  };

  const createNewGalleryImage = async (image: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({}));
    formData.append("files.image", image);

    const res = await fetch("http://localhost:1337/api/artworks", {
      method: "POST",
      body: formData,
    });

    const createResponse = await res.json();
  };

  return (
    <div className="pt-36 ">
      <h1>Gallery Admin</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" multiple onChange={handleChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default GalleryAdminPage;
