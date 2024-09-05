import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from "../../apiServices/blogsApiService";
import { Separator } from "@/components/ui/separator";
import { Blog } from "../Blogs/Blogs";
import { PacmanLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";

export default function EnhancedPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blogs = await getBlogs();
        const foundPost = blogs.find((p) => p.id === Number(id));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Post not found.");
        }
      } catch (error) {
        setError("Error fetching post.");
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0b1e]">
        <PacmanLoader color="#8b5cf6" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0b1e] text-white">
        <p className="text-2xl font-semibold">{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0b1e] text-white">
        <p className="text-2xl font-semibold">Post not found</p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen pt-20 bg-[#0a0b1e] text-white"
      >
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </motion.div>
              <div className="p-6 md:p-8">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  {post.title}
                </motion.h1>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4 mb-6 text-gray-300"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://i.ibb.co/3mn2P2L/Whats-App-Image-2024-07-19-at-19-48-12-a0ae1728.jpg" />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>10 min read</span>
                  </div>
                </motion.div>
                <Separator className="my-6" />
                <motion.article
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></motion.article>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
