"use client"

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSecondAPI } from '@/redux/product/productAPI';
import React, { useEffect } from 'react'
import Image from "next/image";


function ApiTwoSection() {
  const dispatch = useAppDispatch();
  const {
    secondResponse,
    getSecondResponseStatus,
    getSecondResponseError
  } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getSecondAPI());
  }, []);

  return (
    <div className='flex justify-between items-center'>
      {
        getSecondResponseStatus === "loading" ? (
          <div>Loading...</div>
        ) : getSecondResponseStatus === "success" ? (
          secondResponse.map((item, index) => (
            <div key={item.mainShortcutId} className='flex flex-col items-center justify-between'>
              <img
                src={item.imageUrl}
                alt="item image"
                className='rounded-lg'
                width={62}
                height={62}
              />
              <p className='text-center py-2 text-[13px]'>{item.title}</p>
            </div>
          ))
        ) : getSecondResponseStatus === "failed" ? (
          <div>
            <h1>API-2</h1>
            <div>
              <p>Error: {getSecondResponseError}</p>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default ApiTwoSection