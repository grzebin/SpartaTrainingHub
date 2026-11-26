// Sales Studio v0.6.1 — source artwork coordinates, in pixels.
import type { CardFormatId } from '../cardFormats';

export const DOCUMENT_SIZE = { width: 2898, height: 3750 } as const;
export type DocumentRect = { x: number; y: number; width: number; height: number };
export type ProductSlotFormat = CardFormatId | 'promo-tall' | 'promo-square';
export type DocumentSlot = DocumentRect & (
  | { id: string; kind: 'product'; format: ProductSlotFormat }
  | { id: string; kind: 'promotion' }
);
export type DocumentTemplate = {
  id: string;
  name: string;
  slots: DocumentSlot[];
  categoryBands: DocumentRect[];
};

type Bounds = [number, number, number, number];
const rect = ([x, y, width, height]: Bounds): DocumentRect => ({ x, y, width, height });
export const DOCUMENT_HEADER = rect([0, 0, 2898, 308]);
export const DOCUMENT_HEADER_BAND = rect([0, 308, 2898, 169]);
export const DOCUMENT_FOOTER = rect([0, 3345, 2898, 373]);

const products = (format: ProductSlotFormat, bounds: Bounds[]): DocumentSlot[] =>
  bounds.map((b, i) => ({ ...rect(b), id: `product-${i + 1}`, kind: 'product', format }));
const promotion = (): DocumentSlot => ({ ...rect([28, 2421, 2842, 905]), id: 'promotion-1', kind: 'promotion' });

export const documentTemplates: DocumentTemplate[] = [
  { id: 'spotlight', name: 'Product Spotlight Card', categoryBands: [], slots: products('square', [[62,518,2753,2785]]) },
  { id: 'vertical-2', name: 'Vertical 2 Card', categoryBands: [], slots: products('tall', [[62,518,1348,2785],[1467,518,1348,2785]]) },
  { id: 'vertical-3', name: 'Vertical 3 Card', categoryBands: [], slots: products('extra-tall', [[62,518,900,2785],[999,518,900,2785],[1937,518,900,2785]]) },
  { id: 'horizontal-3', name: 'Horizontal 3 Card', categoryBands: [], slots: products('wide', [[56,519,2785,900],[56,1460,2785,900],[56,2402,2785,900]]) },
  { id: 'vertical-6', name: 'Vertical 6 Card', categoryBands: [], slots: products('portrait', [[62,489,900,1396],[999,489,900,1396],[1937,489,900,1396],[61,1935,900,1396],[998,1935,900,1396],[1937,1935,900,1396]]) },
  { id: 'horizontal-3-promo', name: 'Horizontal 3 Card - Promo', categoryBands: [], slots: [...products('promo-tall', [[28,494,900,1881],[999,494,900,1881],[1970,494,900,1881]]), promotion()] },
  { id: 'horizontal-6-promo', name: 'Horizontal 6 Card - Promo', categoryBands: [], slots: [...products('promo-square', [[28,494,900,906],[999,494,900,906],[1970,494,900,906],[28,1457,900,906],[999,1457,900,906],[1970,1457,900,906]]), promotion()] },
  { id: 'horizontal-12', name: 'Horizontal 12 Card', categoryBands: [536,1241,1964,2673].map(y => rect([0,y,2898,58])), slots: products('compact', [[40,607,914,553],[984,607,914,553],[1928,607,914,553],[40,1320,914,553],[984,1320,914,553],[1928,1320,914,553],[48,2034,914,553],[992,2034,914,553],[1935,2034,914,553],[48,2747,914,553],[992,2747,914,553],[1935,2747,914,553]]) },
];

export const getDocumentTemplate = (id: string) => documentTemplates.find(template => template.id === id);
