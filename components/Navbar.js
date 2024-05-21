import React from 'react'
import Link from 'next/link'


export default function () {
  return (
    <nav className='flex gap-5 font-bold bg-black text-white p-10'>
        <Link href="/">Acceuil</Link>
        <Link href="/Services">Service</Link>
        <Link href="/Contact">Contact</Link>
    </nav>
  )
}