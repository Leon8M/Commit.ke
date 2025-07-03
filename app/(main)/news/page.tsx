
import { getSortedPostsData } from "@/lib/markdown";
import NewsCard from "@/app/components/NewsCard";
import { Suspense } from "react";
import SkeletonCard from "@/app/components/SkeletonCard";

async function NewsList() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
    const allNews = getSortedPostsData("news");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news, index) => (
                <NewsCard key={news.slug} news={news} index={index} />
            ))}
        </div>
    )
}

export default function NewsPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Latest Tech News</h1>
      <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
          </div>
      }>
          <NewsList />
      </Suspense>
    </section>
  );
}