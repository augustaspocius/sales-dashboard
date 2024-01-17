// fetchHelper.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchHelper } from '../fetchHelper';

beforeEach(() => {
    vi.restoreAllMocks();
});

describe('fetchHelper', () => {
    it('successfully fetches a list of products with specific properties', async () => {
        const mockProducts = [
            { id: 1, title: 'iPhone 9', category: 'smartphones', brand: 'Apple', price: 549, stock: 94, rating: 4.69 },
            { id: 2, title: 'iPhone X', category: 'smartphones', brand: 'Apple', price: 899, stock: 34, rating: 4.44 },
            { id: 3, title: 'Samsung Universe 9', category: 'smartphones', brand: 'Samsung', price: 1249, stock: 36, rating: 4.09 }
        ];
        
        vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ products: mockProducts }),
        } as Response);
        
        const data = await fetchHelper<{ products: Array<{ id: number; title: string; category: string; brand: string; price: number; stock: number; rating: number }> }>('https://dummyjson.com/products');
        expect(data.products.length).toBeGreaterThan(0);
        expect(data.products[0].title).toBe('iPhone 9');
        expect(data.products[1].price).toBe(899);
        expect(data.products[2].brand).toBe('Samsung');
    });
});