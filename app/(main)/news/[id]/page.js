// Single News Detail Page
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { getNewsById } from "@/app/lib/data";


export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const news = await getNewsById(id);



  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-sm mb-6 inline-block hover:underline"
        style={{ color: "#D72050" }}
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Category badge */}
        <Chip size="sm" className="mb-4" style={{ backgroundColor: "#D72050", color: "white" }}>
          Category #{news.category_id}
        </Chip>

        {/* Title */}
        <h1
          className="text-2xl font-bold text-gray-900 mb-4 leading-snug"
          
        >
          {news.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          {news.author?.img && (
            <Image
              src={news.author.img}
              alt={news.author.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-sm">{news.author?.name}</p>
            <p className="text-xs text-gray-400">{news.author?.posted_date}</p>
          </div>
          <div className="ml-auto text-right">
            <span className="text-yellow-500 text-sm">★ {news.rating?.number}</span>
            <p className="text-xs text-gray-400">👁 {news.total_view?.toLocaleString()}</p>
          </div>
        </div>

        {/* Image */}
        {news.image_url && (
          <div className="relative w-full h-72 mb-5 rounded-lg overflow-hidden">
            <Image src={news.image_url} alt={news.title} fill className="object-cover" sizes="768px" />
          </div>
        )}

        {/* Details */}
        <p className="text-gray-700 leading-relaxed text-base">{news.details}</p>
      </div>
    </div>
  );
}
