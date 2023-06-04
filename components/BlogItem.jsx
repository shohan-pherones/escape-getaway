import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div className="w-[30rem]  overflow-hidden sm:flex items-center">
      <Link href={`/blog/${blog.id}`}>
        <div className="w-[18rem] h-[11rem] overflow-hidden">
          <Image
            src={blog.cover}
            alt={blog.firstHeadline}
            width={640}
            height={360}
            priority
            className="h-full w-full object-cover block"
          />
        </div>
      </Link>

      <div className="sm:p-5 pt-3">
        <Link
          href={`/blog/${blog.id}`}
          className="text-2xl font-semibold hover:text-gray-800 duration-300 hover:underline "
        >
          {blog.firstHeadline}
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
