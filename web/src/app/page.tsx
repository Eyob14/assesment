'use client'

import React from 'react'
import AppBar from '@/component/appBar';
import ApiTwoSection from '@/component/apiTowSection';
import Slider from '@/component/carausel';

export default function Home() {
  const slides = [
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://i.ibb.co/B3s7v4h/2.png',
    'https://i.ibb.co/XXR8kzF/3.png',
    'https://i.ibb.co/yg7BSdM/4.png'
  ];
  return (
    <main className="py-10">
      <div className="px-96">
        <AppBar />
      </div>
      <div className='w-full border-b py-2'></div>
      <div className="relative">
        <div className='px-96'>
          <Slider />
        </div>
      </div>

      {/** API-2 */}
      <div className="px-96 py-8">
        <ApiTwoSection />
      </div>

      {/** API-3 */}
      <div className="px-96 py-8">
        {/* <ApiTwoSection /> */}
      </div>

    </main>
  );
}
