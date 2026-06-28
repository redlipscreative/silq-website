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

export const products: Product[] = [
  {
    id: 'active-dress',
    slug: 'active-dress',
    line: 'Active Dress',
    name: 'SilqSports Active Dress',
    descriptionEn: 'Move freely and look amazing. A sleeveless open-back sport dress with a V-neck polo collar and side stripe detail — designed for the active woman who refuses to compromise on style. Available in Coconut Milk White, Bright Yellow, and Navy Blue.',
    descriptionMs: 'Bergerak bebas dan tampil memukau. Gaun sukan tanpa lengan berbelakang terbuka dengan kolar polo leher-V dan jalur sisi — direka untuk wanita aktif yang tidak mahu berkompromi dengan gaya. Tersedia dalam warna Putih Susu Kelapa, Kuning Cerah, dan Biru Navy.',
    price: 119.00,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/products/active-dress-main.jpg',
      '/products/active-dress-yellow.jpg',
      '/products/active-dress-white.jpg',
      '/products/active-dress-navy.jpg',
      '/products/active-dress-details.jpg',
      '/products/active-dress-material.jpg',
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
