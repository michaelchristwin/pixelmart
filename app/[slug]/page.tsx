"use client";

import React, { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConfigurableProduct, Product, ProductData } from "@/lib/mockdata";
import { StaticImageData } from "next/image";

const isConfigurable = (product: Product): product is ConfigurableProduct => {
  return product.type === "configurable";
};

interface ColorImages {
  [color: string]: (StaticImageData | string)[];
}

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const product = ProductData.find((product) => product.slug === params.slug);
  if (!product) {
    return <p>Product is unavailable</p>;
  }
  return <DisplayProduct product={product} />;
};

export default ProductPage;

const DisplayProduct = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const colorImagesMap: ColorImages = React.useMemo(() => {
    if (!isConfigurable(product) || !product.variants.colors) return {};
    return product.variants.colors.reduce((map, color, colorIndex) => {
      // Get 4 images for this color starting from colorIndex * 4
      const startIndex = colorIndex * 4;
      map[color] = product.images.slice(startIndex, startIndex + 4);
      return map;
    }, {} as ColorImages);
  }, [product]);

  // Get current set of images based on selected color
  const currentImages = React.useMemo(() => {
    if (!isConfigurable(product) || !selectedColor) {
      return product.images.slice(0, 4);
    }
    return colorImagesMap[selectedColor] || product.images.slice(0, 4);
  }, [product, selectedColor, colorImagesMap]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedImageIndex(0); // Reset to first image when color changes
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={
                typeof currentImages[selectedImageIndex] === "string"
                  ? currentImages[selectedImageIndex]
                  : currentImages[selectedImageIndex].src
              }
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {currentImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImageIndex === idx ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={typeof img === "string" ? img : img.src}
                  alt={`Product ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating as number)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.reviews} reviews
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Size Selector */}
          {/* {product.type === "configurable" && product.variants && (
            <div>
              <h3 className="text-sm font-medium mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.variants.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-500"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )} */}

          {/* Color Selector */}
          {product.type === "configurable" && product.variants && (
            <div>
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.variants.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedColor === color
                        ? "border-blue-500 bg-blue-50 text-blue-500"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full h-12 text-lg">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <Card className="p-4 text-center">
              <Truck className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Free Shipping</p>
            </Card>
            <Card className="p-4 text-center">
              <RotateCcw className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Easy Returns</p>
            </Card>
            <Card className="p-4 text-center">
              <Shield className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">Secure Checkout</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
