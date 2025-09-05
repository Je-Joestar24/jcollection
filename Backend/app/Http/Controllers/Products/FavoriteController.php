<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the user's favorites.
     */
    public function index(Request $request)
    {
        $favorites = Favorite::with('product.category')
            ->where('user_id', Auth::id())
            ->paginate(10);

        return ProductResource::collection($favorites->pluck('product'));
    }

    /**
     * Add a product to favorites.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $favorite = Favorite::firstOrCreate([
            'user_id'    => Auth::id(),
            'product_id' => $request->product_id,
        ]);

        return response()->json([
            'message' => 'Product added to favorites successfully.',
            'data'    => new ProductResource($favorite->product),
        ]);
    }

    /**
     * Remove a product from favorites.
     */
    public function destroy($productId)
    {
        $favorite = Favorite::where('user_id', Auth::id())
            ->where('product_id', $productId)
            ->first();

        if (!$favorite) {
            return response()->json(['message' => 'Favorite not found.'], 404);
        }

        $favorite->delete();

        return response()->json(['message' => 'Product removed from favorites successfully.']);
    }
}
