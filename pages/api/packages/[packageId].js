import { getAPackage } from "@/prisma/packages";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const singlePackage = await getAPackage(req.query.packageId);
      return res.status(200).json(singlePackage);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
