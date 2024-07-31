import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from "../../apiServices/blogsApiService";
import { Separator } from "@/components/ui/separator"; // Update path as needed
import { Blog } from "../Blogs/Blogs";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Blog>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blogs = await getBlogs();
        const foundPost = blogs.find((p) => p.id === Number(id));
        setPost(foundPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#22242f]">
      <div className="flex-1 grid md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8">
        <main className="prose prose-gray dark:prose-invert">
          <header className="masthead bg-cover bg-center bg-[#2E2E3A] border border-[#4E4E6A]">
            <div className="container mx-auto px-4 lg:px-5 relative">
              <div className="flex justify-center">
                <div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12">
                  <div className="py-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c497fe]">
                      {post.title}
                    </h1>
                    <div className="flex items-center pt-5 gap-4 max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      <div className="flex items-center gap-2">
                        <span>{post.author}</span>
                      </div>
                      <Separator orientation="vertical" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article
            className="mt-8 text-white {styles.prose}"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></article>
        </main>
        <aside className="space-y-6">
          <div className="space-y-2">
            <div className="grid gap-2">
              {/* You might want to list related posts or similar content here */}
              {/* Example: */}
              {post && (
                <img
                  src={post.img}
                  className="flex items-center gap-2 text-sm hover:underline"
                  alt={post.title}
                />
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PostPage;
