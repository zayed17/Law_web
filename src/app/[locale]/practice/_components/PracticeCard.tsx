'use client';

import { dummyImg } from '@/imports/images.imports';
import Image from 'next/image';
import { FaGavel, FaBook, FaBalanceScale } from 'react-icons/fa';

const lawAreas = [
  {
    title: 'Personal Injury Law',
    icon: <FaGavel className="text-black transition duration-700 group-hover:text-white  w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
  {
    title: 'Education Law',
    icon: <FaBook className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
  {
    title: 'Business Law',
    icon: <FaBalanceScale className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
  {
    title: 'Personal Injury Law',
    icon: <FaGavel className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
  {
    title: 'Education Law',
    icon: <FaBook className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
  {
    title: 'Business Law',
    icon: <FaBalanceScale className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />,
    image: dummyImg,
  },
];

export default function PracticeCard() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lawAreas.map((area, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden  transition duration-700 group hover:-translate-y-2"
          >
            <div className="relative">
              <Image
                src={area.image}
                alt={area.title}
                width={860}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 group-hover:bg-[#c39f63] transition duration-700 bg-white rounded-xl p-6">
                {area.icon}
              </div>
            </div>
            <div className="bg-LightCream text-center py-7">
              <h3 className="md:text-2xl text-lg font-bold text-black">{area.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
