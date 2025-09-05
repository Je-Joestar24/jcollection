<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    /**
     * Display a listing of products (with sync, search & pagination).
     */
    public function index(Request $request)
    {
        // 🔄 Sync external API into DB
        $this->syncExternalProducts();

        $perPage = $request->get('per_page', 10);
        $search  = $request->get('search', null);

        $query = Product::query();

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                  ->orWhere('description', 'LIKE', "%{$search}%");
            });
        }

        $products = $query->orderBy('created_at', 'desc')->paginate($perPage);

        return ProductResource::collection($products);
    }

    /**
     * Show a single product.
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Store a new product (optional if you want manual insert).
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|unique:products,name',
            'description' => 'nullable|string',
            'price'       => 'required|numeric',
            'image_url'   => 'nullable|url',
        ]);

        $product = Product::create($data);

        return new ProductResource($product);
    }

    /**
     * Update an existing product.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name'        => 'sometimes|string|unique:products,name,' . $product->id,
            'description' => 'nullable|string',
            'price'       => 'sometimes|numeric',
            'image_url'   => 'nullable|url',
        ]);

        $product->update($data);

        return new ProductResource($product);
    }

    /**
     * Delete a product.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }

    /**
     * 🔒 Private method to sync products from FakeStoreAPI.
     */
    private function syncExternalProducts(): void
    {
        $response = Http::get('https://fakestoreapi.com/products');

        if (!$response->successful()) {
            return;
        }

        $externalProducts = $response->json();

        foreach ($externalProducts as $item) {
            // ✅ Check for duplicate by name
            $exists = Product::where('name', $item['title'])->exists();

            if (!$exists) {
                Product::create([
                    'name'        => $item['title'],
                    'description' => $item['description'],
                    'price'       => $item['price'],
                    'image_url'   => $item['image'],
                ]);
            }
        }
    }
}
