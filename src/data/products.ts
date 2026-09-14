export type ProductStatus = 'development' | 'available' | 'planned';

export interface ProductCatalogItem {
  slug: string;
  path: string;
  platform: string;
  status: ProductStatus;
  heroAsset: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
}

/**
 * Stable, non-localized product metadata.
 *
 * Marketing copy remains in the centralized i18n layer. Keeping routes,
 * platform metadata and canonical product artwork here lets /products grow
 * into a real multi-product showroom without hard-coding those concerns into
 * the page composition.
 */
export const productCatalog: readonly ProductCatalogItem[] = [
  {
    slug: 'bearagnostic',
    path: '/products/bearagnostic',
    platform: 'Android',
    status: 'development',
    heroAsset: '/products/bearagnostic/dr-bear.png',
    heroAlt: 'Dr. Bear giving a thumbs-up while holding a tablet',
    heroWidth: 1254,
    heroHeight: 1254,
  },
] as const;

export const featuredProduct = productCatalog[0];
