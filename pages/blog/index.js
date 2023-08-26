import BlogItem from "@/components/BlogItem";
import { getAllBlog } from "@/prisma/blog";

const BlogPage = ({ blogs }) => {
  return (
    <main
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="my-16 container mx-auto px-5 lg:px-0"
    >
      <div className="flex flex-wrap gap-10 justify-center">
        {blogs?.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const blogs = await getAllBlog();

  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    updatedAt: blog.updatedAt.toString(),
    createdAt: blog.createdAt.toString(),
  }));

  return {
    props: {
      blogs: updatedBlogs,
    },
  };
};
