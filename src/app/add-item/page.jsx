"use client";

import AddItem from '@/components/AddItem/AddItem'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {
    const router = useRouter();
    useEffect(() => {
        const isLoggedIn = document.cookie.includes("auth=true");
        if(!isLoggedIn){
            router.replace("/login");
        }
    }, [router])
  return (
    <div className='pt-20'>
        <AddItem></AddItem>
    </div>
  )
}
