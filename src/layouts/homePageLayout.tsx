import HomeNav from "./homeNav";

type HomePageLayoutType = {
  children: React.ReactNode;
};

export default function HomePageLayout({ children }: HomePageLayoutType) {
  return (
    <>
      <header>
        <HomeNav />
      </header>
      <main className=" text-gray-text">{children}</main>
    </>
  );
}
