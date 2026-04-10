import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSideBar";


async function getCategories() {
  const res = await fetch("https://phi-lab-server2.vercel.app/api/v1/lab/news/categories");
  const data = await res.json();
  return data.data;
}

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-3">
        <p>Categories </p>
        
         <LeftSidebar categories={categories} activeId={null} />
      </aside>

      <section className="col-span-6">
        <p>News Cards </p>
      </section>

      <aside className="col-span-3">
        <RightSidebar/>
      </aside>
    </div>
  );
};

export default HomePage;
