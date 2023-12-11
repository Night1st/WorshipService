import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  return (
    <>
      
      <main className="min-h-screen">
      <Header />
      {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutWebsite;
