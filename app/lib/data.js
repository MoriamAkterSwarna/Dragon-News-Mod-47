export async function getCategories() {
  const res = await fetch("https://phi-lab-server2.vercel.app/api/v1/lab/news/categories");
  const data = await res.json();
  return data.data;
}


export async function getNewsByCategory(id) {
  if (String(id) === "0") {
    return getAllNews();
  }

  const res = await fetch(
    `https://phi-lab-server2.vercel.app/api/v1/lab/news/category/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export async function getAllNews() {
  const res = await fetch("https://phi-lab-server2.vercel.app/api/v1/lab/news", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}


export async function getNewsById(id) {
  const res = await fetch(`https://phi-lab-server2.vercel.app/api/v1/lab/news/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}