import LeftSidebar from "@/app/components/LeftSidebar";
import NewsCard from "@/app/components/NewsCard";
import RightSidebar from "@/app/components/RightSideBar";
import { getCategories, getNewsByCategory } from "@/app/lib/data";

// async function getNewsByCategory(id) {
//   const res = await fetch(
//     `https://phi-lab-server2.vercel.app/api/v1/lab/news/category/${id}`,
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data.data;
// }

export default async function CategoryPage({ params }) {
  const { id } = await params;

  //   const news = await getNewsByCategory(id);
  //   const categories = await getCategories();

  const [categories, news] = await Promise.all([
    getCategories(),
    getNewsByCategory(id),
  ]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <LeftSidebar categories={categories} activeId={id} />
        </div>
        <div className="col-span-6">
          <p className="text-sm text-gray-500 mb-4">Dragon News Home</p>
          {news?.length > 0 ? (
            news?.map((item) => <NewsCard key={item.id} news={item} />)
          ) : (
            <p className="text-4xl text-cyan-500 font-bold ">
              No news found for this category.
            </p>
          )}
        </div>

        <div className="col-span-3">
          <div className="sticky top-4">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
