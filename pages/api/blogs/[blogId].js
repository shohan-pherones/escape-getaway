import { getABlog } from "@/prisma/blog";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const singleBlog = await getABlog(req.query.blogId);
      return res.status(200).json(singleBlog);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
