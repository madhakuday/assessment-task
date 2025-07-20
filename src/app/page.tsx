import { Footer, Header, PropertyListing } from "@/components";

export default function Home() {
  return (
      <div className="custom-container px-4 m-auto min-h-screen w-full overflow-y-hidden lg:pb-2">
        <Header />
        <PropertyListing />
        <Footer />
      </div>
  );
}
