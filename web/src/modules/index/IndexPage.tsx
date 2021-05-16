import { IndexLayout } from "@/layouts/IndexLayout";
import { SigninCard } from "./components/SigninCard";
import { Tour } from "./components/Tour";
import { TourTypes } from "./TourTypes";

export interface IndexPageProps {
  tourType: TourTypes;
}

export const IndexPage: React.FC<IndexPageProps> = ({ tourType }) => {
  return (
    <IndexLayout title="Twitter: What are you doing?" lang>
      <Tour tourType={tourType} />
      <SigninCard />
    </IndexLayout>
  );
};
