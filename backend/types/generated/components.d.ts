import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    icon: 'write';
  };
  attributes: {
    emailLink: Schema.Attribute.Component<'shared.link', false>;
    footerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    footerSocialLinks: Schema.Attribute.Component<'shared.social-links', true>;
    footerSubtitle: Schema.Attribute.String;
    footerTitle: Schema.Attribute.String;
    menuLinks: Schema.Attribute.Component<'shared.list-links', false>;
    policy: Schema.Attribute.Component<'shared.file-link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    icon: 'doctor';
  };
  attributes: {
    headerLogo: Schema.Attribute.Media<'images'>;
    menuLinks: Schema.Attribute.Component<'shared.list-links', false>;
  };
}

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
    video: Schema.Attribute.Media<'videos'>;
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

export interface PageComponentsRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_components_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'alien';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['beige', 'green', 'pink']>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    title: Schema.Attribute.String;
  };
}

export interface ProgramComponentsAboutProgram extends Struct.ComponentSchema {
  collectionName: 'components_program_components_about_programs';
  info: {
    displayName: 'aboutProgram';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProgramComponentsDaySchedule extends Struct.ComponentSchema {
  collectionName: 'components_program_components_day_schedules';
  info: {
    displayName: 'daySchedule';
  };
  attributes: {
    date: Schema.Attribute.Date;
    events: Schema.Attribute.Component<'program-components.event', true>;
  };
}

export interface ProgramComponentsDialogueSlider
  extends Struct.ComponentSchema {
  collectionName: 'components_program_components_dialogue_sliders';
  info: {
    displayName: 'dialogueSlider';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface ProgramComponentsEvent extends Struct.ComponentSchema {
  collectionName: 'components_program_components_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    description: Schema.Attribute.Text;
    speakers: Schema.Attribute.Text;
    startTime: Schema.Attribute.Time & Schema.Attribute.Required;
    title: Schema.Attribute.Text;
  };
}

export interface ProgramComponentsProgramTimeline
  extends Struct.ComponentSchema {
  collectionName: 'components_program_components_program_timelines';
  info: {
    displayName: 'programTimeline';
  };
  attributes: {
    schedule: Schema.Attribute.Component<
      'program-components.day-schedule',
      true
    >;
  };
}

export interface SharedFileLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_file_links';
  info: {
    displayName: 'fileLink';
    icon: 'cast';
  };
  attributes: {
    file: Schema.Attribute.Media;
    label: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'alien';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedListLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_links';
  info: {
    displayName: 'listLinks';
    icon: 'apps';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'attachment';
  };
  attributes: {
    altText: Schema.Attribute.String;
    href: Schema.Attribute.String;
    socialNetwork: Schema.Attribute.Enumeration<['instagram', 'facebook']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'page-components.animation-separator': PageComponentsAnimationSeparator;
      'page-components.hero-video': PageComponentsHeroVideo;
      'page-components.latest-program': PageComponentsLatestProgram;
      'page-components.latest-program-timeline': PageComponentsLatestProgramTimeline;
      'page-components.rich-text': PageComponentsRichText;
      'program-components.about-program': ProgramComponentsAboutProgram;
      'program-components.day-schedule': ProgramComponentsDaySchedule;
      'program-components.dialogue-slider': ProgramComponentsDialogueSlider;
      'program-components.event': ProgramComponentsEvent;
      'program-components.program-timeline': ProgramComponentsProgramTimeline;
      'shared.file-link': SharedFileLink;
      'shared.link': SharedLink;
      'shared.list-links': SharedListLinks;
      'shared.social-links': SharedSocialLinks;
    }
  }
}
