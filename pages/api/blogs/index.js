import { getAllBlog } from "@/prisma/blog";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const blogs = await getAllBlog();
      return res.status(200).json(blogs);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
