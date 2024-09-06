import React, { useEffect, useState } from "react";
import { fetchGallery, GalleryItem } from "../../apiServices/GalleryapiService";
import { PacmanLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Briefcase, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [filteredGallery, setFilteredGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGallery();
        setGallery(data);
        setFilteredGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = gallery.filter(
      (item) =>
        item.eventname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGallery(filtered);
  }, [searchTerm, gallery]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex w-full pt-20 flex-col min-h-screen justify-center bg-[#0a0b1e] text-white overflow-hidden"
      >
        <div className="fixed inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Gallery
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl">
              <CardContent className="p-6 space-y-8">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by event, project, or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <PacmanLoader color="#8b5cf6" size={50} />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredGallery.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                      >
                        <img
                          src={item.imgurl}
                          alt={`Image ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-lg font-semibold mb-1 text-white">
                            {item.eventname}
                          </h3>
                          <Separator className="bg-gray-700 my-2" />
                          <div className="flex items-center space-x-2 text-cyan-400">
                            <Briefcase size={16} />
                            <span className="text-sm">
                              Project: {item.projectname}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-cyan-400">
                            <MapPin size={16} />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                {filteredGallery.length === 0 && !loading && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-400 mt-8"
                  >
                    No results found for "{searchTerm}"
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;
