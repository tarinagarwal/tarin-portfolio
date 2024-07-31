import React, { useEffect, useState } from "react";
import { fetchGallery, GalleryItem } from "../../apiServices/GalleryapiService";

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGallery();
      setGallery(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20 bg-[#22242f]">
      <h1 className="text-3xl font-bold mb-8 text-[#c497fe]">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border rounded-lg border-[#4E4E6A] hover:scale-105 duration-500"
          >
            <img
              src={item.imgurl}
              alt={`Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-1">{item.eventname}</h3>
                <h3 className="text-lg mb-1">Project: {item.projectname}</h3>
                <p className="text-sm">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
