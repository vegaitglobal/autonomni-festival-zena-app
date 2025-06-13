import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    designedByLink: Schema.Attribute.RichText;
    email: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    policies: Schema.Attribute.Component<'shared.file-link', true>;
    SocialLinks: Schema.Attribute.Component<'shared.icon-link', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menu: Schema.Attribute.Component<'shared.burger-menu', false>;
  };
}

export interface SharedBurgerMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_burger_menus';
  info: {
    displayName: 'BurgerMenu';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFileLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_file_links';
  info: {
    displayName: 'FileLink';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface SharedIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    altText: Schema.Attribute.String;
    href: Schema.Attribute.String;
    SocialNetwork: Schema.Attribute.Enumeration<['Instagram', 'Facebook']>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.burger-menu': SharedBurgerMenu;
      'shared.file-link': SharedFileLink;
      'shared.icon-link': SharedIconLink;
      'shared.link': SharedLink;
    }
  }
}
