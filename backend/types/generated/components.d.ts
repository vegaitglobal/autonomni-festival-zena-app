import type { Schema, Struct } from '@strapi/strapi';

export interface PageComponentsAnimationSeparator
  extends Struct.ComponentSchema {
  collectionName: 'components_page_components_animation_separators';
  info: {
    displayName: 'Animation Separator';
    icon: 'play';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['logoBush', 'logoStar']>;
  };
}

export interface PageComponentsHeroVideo extends Struct.ComponentSchema {
  collectionName: 'components_page_components_hero_videos';
  info: {
    displayName: 'Hero Video';
    icon: 'play';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface PageComponentsLargeRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_components_large_rich_texts';
  info: {
    displayName: 'Large Rich Text';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 770;
      }>;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsLatestProgram extends Struct.ComponentSchema {
  collectionName: 'components_page_components_latest_programs';
  info: {
    displayName: 'Latest Program';
    icon: 'file';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsLatestProgramTimeline
  extends Struct.ComponentSchema {
  collectionName: 'components_page_components_latest_program_timelines';
  info: {
    displayName: 'Latest Program Timeline';
    icon: 'clock';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsMediumRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_components_medium_rich_texts';
  info: {
    displayName: 'Medium Rich Text';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 650;
      }>;
    title: Schema.Attribute.String;
  };
}

export interface PageComponentsSmallRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_components_small_rich_texts';
  info: {
    displayName: 'Small Rich Text';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-components.animation-separator': PageComponentsAnimationSeparator;
      'page-components.hero-video': PageComponentsHeroVideo;
      'page-components.large-rich-text': PageComponentsLargeRichText;
      'page-components.latest-program': PageComponentsLatestProgram;
      'page-components.latest-program-timeline': PageComponentsLatestProgramTimeline;
      'page-components.medium-rich-text': PageComponentsMediumRichText;
      'page-components.small-rich-text': PageComponentsSmallRichText;
    }
  }
}
