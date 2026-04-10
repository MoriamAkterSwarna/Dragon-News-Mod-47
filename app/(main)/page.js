import { redirect } from "next/navigation";

const DEFAULT_CATEGORY_ID = "0";

const HomePage = () => {
  redirect(`/category/${DEFAULT_CATEGORY_ID}`);
};

export default HomePage;
