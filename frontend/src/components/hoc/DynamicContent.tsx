import { HeroSection } from "../modules/HeroSection";
import { TextComponent } from "../modules/TextComponent";


export const DynamicContent = ({ pageData }: { pageData: any }) => {
  return (
    <div>
      {pageData.Hero && <HeroSection data={pageData.Hero} />}
      {pageData.textComponent && <TextComponent data={pageData.textComponent} />}

    </div>
  );
};