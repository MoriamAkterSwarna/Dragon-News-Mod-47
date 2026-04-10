import Link from "next/link";
export default function LeftSidebar({ categories, activeId }) {
    console.log(categories);
  return (
    <div>
      <h3 className="font-bold text-lg border-b pb-2 mb-3">All Category</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/category/${cat.id}`}
              className={`block px-3 py-2 rounded text-sm transition
                ${activeId === cat.id
                  ? "bg-red-100 text-brand font-semibold"
                  : "text-gray-700 hover:bg-gray-100"}`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}