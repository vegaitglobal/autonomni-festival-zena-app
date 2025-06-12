import { ComponentData, ComponentType, PageData } from "@/types/dynamicContent/dynamicContent";
import { HeroSection } from "../modules/HeroSection";
import { HeroComponent } from "@/types/components/hero";

const renderComponent = (
  componentData: ComponentData, 
  componentType: ComponentType, 
  index: number
) => {
  switch (componentType) {
    case 'hero':
      return <HeroSection key={`hero-${index}`} data={componentData as HeroComponent} />;
    default:
      return null;
  }
};

const renderField = (
  fieldData: ComponentData | ComponentData[] | undefined, 
  fieldName: ComponentType
): React.ReactNode => {
  if (!fieldData) return null;
  
  if (Array.isArray(fieldData)) {
    return fieldData.map((item, index) => 
      renderComponent(item, fieldName, index)
    );
  }

  return renderComponent(fieldData, fieldName, 0);
};

export const DynamicContent = ({ pageData }: { pageData: PageData }) => {
  return (
    <div>
      {renderField(pageData.Hero, 'hero')}
    </div>
  );
};