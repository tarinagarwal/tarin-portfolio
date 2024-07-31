// api.ts
const API_BASE_URL = "http://127.0.0.1:5050/api/v1";

export interface GalleryItem {
  id?: number;
  imgurl: string;
  location: string;
  eventname: string;
  projectname: string;
}

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery`);
    if (!response.ok) throw new Error("Failed to fetch gallery items");
    const data = await response.json();
    return data.gallery;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addGalleryItem = async (
  item: GalleryItem
): Promise<GalleryItem | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error("Failed to add gallery item");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
