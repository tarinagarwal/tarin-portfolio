import React, { useEffect, useState } from "react";
import { getBlogs } from "../../apiServices/blogsApiService";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  img: string;
  description: string;
  body: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-dvh bg-[#22242f]">
      <header className="px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c497fe]">
            My Blogs
          </h1>
          <div className="relative w-full sm-search2:w-[150px] sm-search:w-[200px] max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search blog posts..."
              className="block w-full p-2  pl-10 text-sm border-transparent rounded-md focus:border-primary focus:ring-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 md:px-6 md:py-12">
        {filteredBlogs.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden rounded-lg group shadow-md hover:scale-105 duration-500 py-2 shadow-[#c497fe] hover:shadow-[#c4f582]"
          >
            <Link to={`/post/${post.id}`} className="absolute inset-0 z-10">
              <span className="sr-only">View post</span>
            </Link>
            <img
              src={post.img}
              alt="Blog post image"
              width={400}
              height={225}
              className="w-full h-48 object-cover transition-opacity group-hover:opacity-80"
            />
            <div className="p-4">
              <h2 className="text-lg text-[#c497fe] font-semibold tracking-tight line-clamp-2">
                {post.title}
              </h2>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <div className="ml-3 text-[#c4f582]">
                  <span>{post.author}</span>
                  <span className="mx-1">·</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-white line-clamp-3">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blogs;
