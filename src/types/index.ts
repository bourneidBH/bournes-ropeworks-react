export type CardData = {
  title: string,
  imageUrl: string,
  body: string[],
  priceInfo?: string,
}

export type BannerData = {
  title?: string,
  subhead?: string,
  body?: string[],
  imageUrl: string,
  linkUrl?: string,
  linkText?: string,
}