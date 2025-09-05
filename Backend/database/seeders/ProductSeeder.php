<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $url = 'https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json';

        $response = Http::get($url);

        if (! $response->successful()) {
            $this->command->error("❌ Failed to fetch products from API");
            return;
        }

        $products = $response->json();

        foreach ($products as $item) {
            // Create or find category
            $category = ProductCategory::firstOrCreate([
                'name' => $item['category'] ?? 'Uncategorized',
            ]);

            // Insert product
            Product::create([
                'name'               => $item['name'],
                'description'        => $item['description'] ?? null,
                'price'              => isset($item['priceCents']) ? $item['priceCents'] / 100 : 0,
                'image_url'          => $item['image'] ?? null,
                'product_category_id'=> $category->id,
            ]);
        }

        $this->command->info("✅ Seeded " . count($products) . " products successfully.");
    }
}
