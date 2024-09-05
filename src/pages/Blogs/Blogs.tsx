import { useEffect, useState } from "react";
import { getBlogs } from "../../apiServices/blogsApiService";
import { Search, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  img: string;
  description: string;
  body: string;
}

export default function EnhancedBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

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
            My Blogs
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
                    type="search"
                    placeholder="Search blog posts..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="bg-gray-900 border-gray-700 overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                          <Link to={`/post/${post.id}`} className="block">
                            <div className="relative aspect-video overflow-hidden">
                              <img
                                src={post.img}
                                alt={`Blog post image for ${post.title}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            </div>
                          </Link>
                          <CardContent className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-purple-300 line-clamp-2 hover:text-purple-400 transition-colors duration-200">
                              <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </h2>
                            <Separator className="my-2 bg-gray-700" />
                            <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                              {post.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <div className="flex items-center space-x-2">
                                <User size={14} />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
                {filteredBlogs.length === 0 && !loading && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-400 mt-8"
                  >
                    No results found for "{search}"
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
