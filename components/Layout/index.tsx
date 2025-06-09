import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  );
}
