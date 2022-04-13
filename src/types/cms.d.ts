type Image = {
  src: string;
  alt: string;
  caption?: string;
  media?: string;
};

type Author = {
  email: string;
  lastName?: string;
  firstName?: string;
};

type MainNav = Link[];

type SocialNetwork = 'facebook' | 'instagram' | 'vk';

type SocialLinks = Record<SocialNetwork, Link>;

type TranslationItem = {
  key: string;
  value: string;
};

type Translations = TranslationItem[];

interface FrontmatterBase {
  title: string;
  headline?: string;
  cover?: Image;

  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;

  noindex?: boolean;
  nofollow?: boolean;

  draft?: boolean;
  sortOrder?: number;
}

interface SectionItem {
  title: string;
  subtitle?: string;
  content?: string;
  image?: Image;
}

interface SectionFrontmatter {
  title: string;
  subtitle?: string;
  image?: Image;
  items?: SectionItem[];
}

interface Section extends SectionFrontmatter {
  id: string;
  sortOrder: number;
  locale: string;
  Content: any;
}

interface BaseObject extends FrontmatterBase {
  Content: any;

  slug: string;
  to: string;
  locale: string;
}

interface Page extends FrontmatterBase, BaseObject {}
