import YearInReviewContainer from "@/components/octopus/YearInReviewContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My 2026 Energy Consumption Data Visualization Art | Octoprice",
  description: "A data visualization of energy consumption in 2026",
  keywords: ["Octopus Energy", "Energy Consumption", "2026"],
  authors: [
    { name: "Edward Chung", url: "https://edward-designer.github.io/" },
  ],
  metadataBase: new URL("https://octopriceuk.app/"),
  alternates: {
    canonical: `/yearInReview/2026`,
  },
  openGraph: {
    title: "My 2026 Energy Consumption Data Visualization Art | Octoprice",
    description: "A data visualization of energy consumption in 2026",
    url: "https://octopriceuk.app/yearInReview/2026",
    siteName: "Octoprice App",
    images: [
      {
        url: "https://octopriceuk.app/octoprice-yearInReview.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
};

const YearInReview2026 = () => {
  return (
    <div className="lg:col-[content] my-4 flex flex-col gap-6 text-lg">
      <YearInReviewContainer year="2026" />
    </div>
  );
};

export default YearInReview2026;
