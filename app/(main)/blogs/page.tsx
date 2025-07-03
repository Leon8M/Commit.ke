// app/(main)/blogs/page.tsx
import { getSortedPostsData } from "@/lib/markdown";
import BlogCard from "@/app/components/BlogCard";
import { Suspense } from "react";
import SkeletonCard from "@/app/components/SkeletonCard";
import AnimatedText from "@/app/components/animations/AnimatedText";

async function BlogList() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
    const allBlogs = getSortedPostsData("blogs");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allBlogs.map((blog, index) => (
                <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
        </div>
    )
}

export default function BlogsPage() {
  return (
    <section>
        <AnimatedText
            text="From the Devs, For the Devs"
            className="text-4xl font-bold mb-8 text-center"
        />
        <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <SkeletonCard />
                <SkeletonCard />
            </div>
        }>
            <BlogList />
        </Suspense>
    </section>
  );
}