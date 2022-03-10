type Image = {
  src: string;
  xl?: string;
  alt: string;
  caption?: string;
};

type MainNav = Link[];

type SocialNetwork = 'facebook' | 'instagram';

interface SocialLinks extends Record<string, Link> {}

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
  html: string;
}

interface BaseObject extends FrontmatterBase {
  html: string;

  slug: string;
  to: string;
  locale: string;
}

interface Page extends FrontmatterBase, BaseObject {}
