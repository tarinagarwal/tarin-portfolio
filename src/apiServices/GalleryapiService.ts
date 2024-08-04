const API_BASE_URL = "https://portfolio-backend-kukl.onrender.com/api/v1";

export interface GalleryItem {
  id?: number;
  imgurl: string;
  location: string;
  eventname: string
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

export const deleteGalleryItem = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete gallery item");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateGalleryItem = async (
  id: number,
  item: GalleryItem
): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error("Failed to update gallery item");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
