export type Product = {
  id: string
  slug: string
  line: string
  name: string
  descriptionEn: string
  descriptionMs: string
  price: number
  sizes: string[]
  images: string[]
}

export const products: Product[] = []

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
