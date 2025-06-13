import { ComponentData, ComponentType, PageData } from "@/types/dynamicContent/dynamicContent";
import { HeroSection } from "../modules/HeroSection";
import { HeroComponent } from "@/types/components/HeroComponent";
import { TextComponent } from "../modules/Text";
import { TextComponentData } from "@/types/components/TextComponent";

const renderComponent = (
  componentData: ComponentData,
  index: number
) => {
  const componentType = componentData.__component.split('.')[1] as ComponentType;
  
  switch (componentType) {
    case 'hero':
      return <HeroSection key={`hero-${index}`} data={componentData as HeroComponent} />;
    case 'text':
      return <TextComponent key={`text-${index}`} data={componentData as TextComponentData} />;
    default:
      return null;
  }
};

export const DynamicContent = ({ pageData }: { pageData: PageData }) => {
  return (
    <div>
      {pageData.components?.map((component: ComponentData, index: number) => 
        renderComponent(component, index)
      )}
    </div>
  );
};