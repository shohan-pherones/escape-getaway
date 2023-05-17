import prisma from "./prisma";

// GET ALL blogs
export const getAllBlog = async () => {
  const blogs = await prisma.blog.findMany({});
  return blogs;
};

// GET A SINGLE Blog
export const getABlog = async (id) => {
  const singleBlog = await prisma.blog.findUnique({
    where: { id },
  });
  return singleBlog;
};
