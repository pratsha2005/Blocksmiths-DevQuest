'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import Features from '../components/features'
import AboutUs from '../components/About'
import Footer from '../components/footer'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <div id='about'>
      <AboutUs/>
    </div>
    
    <Footer/>
</>
  )
}
