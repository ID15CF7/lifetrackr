import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LifeDomains from "./components/LifeDomains/LifeDomains";
import UserInfoSection from "./components/UserInfo/UserInfoSection";
import HeatmapViewSection from "./components/HeatmapView/HeatmapViewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col gap-8 items-center sm:items-start">
        <UserInfoSection />
        <LifeDomains />
        <HeatmapViewSection />
      </main>
      <Footer />
    </div>
  );
}
