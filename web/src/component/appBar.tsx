'use client'

import React from 'react'
import Image from "next/image";
import { Icon } from '@iconify/react';

function AppBar() {
    return (
        <div className='flex justify-between items-center'>
            {/** First section */}
            <div className="flex justify-between space-x-4">
                <Image
                    src="/logo.png"
                    alt="company logo"
                    className=""
                    width={128}
                    height={25}
                    priority
                />
                <button className='flex items-center text-[#00D094] p-2'>
                    <Image
                        src="/humburger.svg"
                        alt="company logo"
                        className=""
                        width={16}
                        height={16}
                        priority
                    />
                    <span className='px-2'>카테고리</span>
                </button>
            </div>
            {/** second section */}
            <div className="relative flex items-center border rounded-lg w-1/2 h-12 px-2 focus-within:border-blue-500">
                <input type="text" placeholder="살까말까 고민된다면 검색해보세요!" className="w-full h-full pl-10 outline-none bg-transparent" />
                <div className="absolute left-3 text-blue w-4 h-4">
                    <Icon icon="mdi-light:magnify" />
                </div>
            </div>

            {/** Third section */}
            <div className="flex space-x-4">
                <Image
                    src="/arrow.png"
                    alt="arrow image"
                    className="dark:invert"
                    width={30}
                    height={20}
                    priority
                />
                <p className='border-l pl-4'>로그인 / 회원가입</p>
            </div>
        </div>
    )
}

export default AppBar