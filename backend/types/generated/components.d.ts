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
    listLinks: Schema.Attribute.Component<'shared.list-links', false>;
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
    headerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    listLinks: Schema.Attribute.Component<'shared.list-links', false>;
  };
}

export interface SharedFileLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_file_links';
  info: {
    displayName: 'fileLink';
    icon: 'cast';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'shared.file-link': SharedFileLink;
      'shared.link': SharedLink;
      'shared.list-links': SharedListLinks;
      'shared.social-links': SharedSocialLinks;
    }
  }
}
