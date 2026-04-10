import Link from "next/link";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { FaEye, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function NewsCard({ news }) {
  return (
    <Card className="mb-4 rounded-none border" shadow="none">
      <Card.Content>
        {/* Author */}
        <div className="flex items-center gap-3 mb-3">
          <Image
            src={news.author?.img || "/placeholder.png"}
            alt={news.author?.name}
            width={20}
            height={20}
            loading="eager"
            unoptimized
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{news.author?.name || "Unknown"}</p>
            <p className="text-xs text-gray-400">{news.author?.published_date}</p>
          </div>
        </div>
        {/* Title */}
        <h2 className="text-base font-bold mb-3 leading-snug">{news.title}</h2>
        {/* Image */}
        {news.image_url && (
          <Image
            src={news.image_url}
            alt={news.title}
            width={100}
            height={100}
            loading="eager"
            unoptimized
            className="w-full h-48 object-cover mb-3"
          />
        )}
        {/* Details */}
        <p className="text-sm text-gray-600 line-clamp-3">{news.details}</p>
      </Card.Content>
      <Card.Footer className="flex justify-between items-center border-t px-4 py-2">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {news.rating?.number}
          </span>
          <span className="flex items-center gap-1">
            <FaEye /> {news.total_view}k
          </span>
        </div>
        <Link href={`/news/${news.id}`}  size="sm" color="danger" radius="none">
          Read More
        </Link>
      </Card.Footer>
    </Card>
  );
}