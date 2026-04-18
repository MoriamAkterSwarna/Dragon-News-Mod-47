import Link from "next/link";
export default function LeftSidebar({ categories, activeId }) {
    
  return (
    <div>
      <h3 className="font-bold text-lg border-b pb-2 mb-3">All Category</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/category/${cat.id}`}
              className={`block rounded px-3 py-2 text-sm transition ${
                String(activeId) === String(cat.id)
                  ? "bg-red-100 text-red-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}