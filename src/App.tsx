import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageCarousel from "./components/HomePage/ImageCarousel";
import CategoryCards from "./components/HomePage/CategoryCards";
import PopularProducts from "./components/HomePage/PopularProducts";
import ApparelSpotlight from "./components/HomePage/ApparelSpotlight";
import GiftsSpotlight from "./components/HomePage/GiftsSpotLight";
import LargeFormatSpotlight from "./components/HomePage/LargeFormatSpotlight";
function App() {
  return (
    <>
      <Header />
      <ImageCarousel />
      <CategoryCards />
      <PopularProducts />
      <ApparelSpotlight />
      <GiftsSpotlight />
      <LargeFormatSpotlight />
      {/* Rest of your website */}
      <Footer />
    </>
  );
}

export default App;
