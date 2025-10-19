import type {Image, Slug} from 'sanity'

// Base types
interface BaseBlock {
  _type: string
  _key: string
}

// Component Types
export interface HeroSection extends BaseBlock {
  _type: 'heroSection'
  title?: string
  subtitle?: string
  image?: Image
  CTAText?: string
  CTALink?: string
  buttonText?: string
  buttonLink?: string
}

export interface CodeBlock extends BaseBlock {
  _type: 'codeBlock'
  language?: string
  code?: string
}

export interface TextWithIllustration extends BaseBlock {
  _type: 'textWithIllustration'
  title?: string
  tagline?: string
  text?: string
  image?: Image
  imagePosition?: 'left' | 'right'
}

export interface Feature extends BaseBlock {
  _type: 'feature'
  title?: string
  description?: string
  icon?: Image
}

export interface FeatureList extends BaseBlock {
  _type: 'featureList'
  title?: string
  features?: Feature[]
}

export interface CallToAction extends BaseBlock {
  _type: 'callToAction'
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

export interface Gallery extends BaseBlock {
  _type: 'gallery'
  title?: string
  images?: Image[]
}

export interface Posts extends BaseBlock {
  _type: 'posts'
  title?: string
}

export interface BlockContent extends BaseBlock {
  _type: 'blockContent'
  body: any[]
}

// Page Component Union Type
export type PageComponent = HeroSection | CodeBlock | TextWithIllustration | FeatureList | CallToAction | Gallery | Posts | BlockContent

// Document Types
export interface Post {
  _type: 'post'
  _id: string
  title?: string
  slug?: Slug
  author?: {
    name?: string
  }
  mainImage?: Image
  categories?: {
    title?: string
  }[]
  publishedAt?: string
  body?: any[]
  excerpt?: string
}
