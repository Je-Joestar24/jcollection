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
     */ public function index(Request $request)
    {
        $perPage    = $request->get('per_page', 10);
        $search     = $request->get('search', null);
        $sortBy     = $request->get('sort_by', 'created_at');
        $sortOrder  = $request->get('sort_order', 'desc');

        $query = Product::query();

        // 🔍 Search
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('description', 'LIKE', "%{$search}%");
            });
        }

        // 🎯 Example filter: category
        if ($request->has('category_id')) {
            $query->where('product_category_id', $request->get('category_id'));
        }

        // 💰 Example filter: price range
        if ($request->has('price_min')) {
            $query->where('price', '>=', $request->get('price_min'));
        }
        if ($request->has('price_max')) {
            $query->where('price', '<=', $request->get('price_max'));
        }

        // 🔄 Sorting (safe fallback)
        $allowedSorts = ['created_at', 'price', 'name'];
        if (!in_array($sortBy, $allowedSorts)) {
            $sortBy = 'created_at';
        }
        $query->orderBy($sortBy, $sortOrder);

        // 📦 Paginate
        $products = $query->paginate($perPage);

        return ProductResource::collection($products);
    }


    /**
     * Show a single product.
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
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
}
