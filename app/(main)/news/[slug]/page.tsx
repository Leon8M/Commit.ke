
import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

async function ArticleContent({ slug }: { slug: string }) {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
    const postData = await getPostData('news', slug);
    return (
        <>
            <div className="relative w-full h-96 mb-8">
                <Image src={postData.image} alt={postData.title} layout="fill" objectFit="cover" className="rounded-lg"/>
                <div className="absolute inset-0 bg-black/50 flex items-end p-8 rounded-lg">
                    <h1 className="text-4xl font-bold text-white">{postData.title}</h1>
                </div>
            </div>
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </>
    )
}

function ArticleSkeleton() {
    return (
        <div>
            <div className="w-full h-96 bg-secondary rounded-lg animate-pulse mb-8"></div>
            <div className="space-y-4">
                <div className="h-8 w-3/4 bg-secondary rounded animate-pulse"></div>
                <div className="h-4 w-full bg-secondary rounded animate-pulse"></div>
                <div className="h-4 w-full bg-secondary rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-secondary rounded animate-pulse"></div>
            </div>
        </div>
    )
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article className="max-w-4xl mx-auto">
      <Link href="/news" className="mb-8 inline-block">
        <Button variant="outline">
            <MoveLeft className="mr-2 h-4 w-4" />
            Back to News
        </Button>
      </Link>
      <Suspense fallback={<ArticleSkeleton />}>
          <ArticleContent slug={params.slug} />
      </Suspense>
    </article>
  );
}

export async function generateStaticParams() {
    const paths = getAllPostSlugs('news');
    return paths;
}