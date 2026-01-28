import HomeHeader from "./components/HomeHeader";
import Footer from "./components/Footer";
import HomePageBanner from "./components/HomePageBanner";
import MostPopularSection from "./components/MostPopularSection";
import TrendingLocationsGrid from "./components/TrendingLocationsGrid";
import NewsletterSection from "./components/NewsletterSection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col">
        <HomePageBanner />

        <MostPopularSection />

        <TrendingLocationsGrid />

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
