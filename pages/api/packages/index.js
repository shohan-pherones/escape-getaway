import { getAllPackages } from "@/prisma/packages";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const packages = await getAllPackages();
      return res.status(200).json(packages);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
