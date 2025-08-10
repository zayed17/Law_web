"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface GalleryItem {
  id: number;
  width: number;
  height: number;
  bgColor: string;
  originalIndex?: number;
}

const GalleryGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, width: 700, height: 900, bgColor: "bg-gray-300" },
    { id: 2, width: 700, height: 900, bgColor: "bg-gray-300" },
    { id: 3, width: 700, height: 900, bgColor: "bg-gray-300" },
    { id: 4, width: 600, height: 400, bgColor: "bg-gray-300" },
    { id: 5, width: 800, height: 500, bgColor: "bg-gray-300" },
    { id: 6, width: 700, height: 900, bgColor: "bg-gray-300" },
    { id: 7, width: 700, height: 900, bgColor: "bg-gray-300" },
    { id: 8, width: 600, height: 400, bgColor: "bg-gray-300" },
  ];

  return (
    <div className="max-w-7xl font-josefin-sans mx-auto p-8">
      <div className="grid gap-4">
        {galleryItems
          .reduce((rows: GalleryItem[][], item: GalleryItem, index: number) => {
            const rowIndex = Math.floor(index / 3);
            if (!rows[rowIndex]) rows[rowIndex] = [];
            rows[rowIndex].push({ ...item, originalIndex: index });
            return rows;
          }, [])
          .map((row: GalleryItem[], rowIndex: number) => (
            <div
              key={rowIndex}
              className={`grid gap-4 ${
                row.length === 3
                  ? "grid-cols-3"
                  : row.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {row.map((item: GalleryItem) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(item.originalIndex!)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-full ${
                      row.length === 3
                        ? "h-90"
                        : row.length === 2
                        ? "h-96"
                        : "h-96"
                    } ${item.bgColor} flex items-center justify-center relative`}
                  >
                    {/* Dark overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-out z-20 ${
                        hoveredIndex === item.originalIndex
                          ? "bg-slate-600 bg-opacity-90 scale-100"
                          : "bg-slate-600 bg-opacity-0 scale-0"
                      }`}
                      style={{
                        transformOrigin: "center",
                        borderRadius: "inherit",
                      }}
                    />

                    {/* Number text */}
                    <span
                      className={`text-6xl font-light relative transition-colors duration-300 z-30 ${
                        hoveredIndex === item.originalIndex
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {item.width} × {item.height}
                    </span>

                    {/* White circle with Plus */}
                    <div
                      className={`absolute z-40 w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 delay-100 ${
                        hoveredIndex === item.originalIndex
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      <Plus
                        className="w-8 h-8 text-slate-600"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
