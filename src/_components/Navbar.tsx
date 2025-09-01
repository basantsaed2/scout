'use client'

import { useState } from 'react'
import { Button } from '@/_components/ui/button'
import { Menu, X } from 'lucide-react'
import {  FaStarOfLife } from "react-icons/fa6";

// Scout Navbar Component - Enhanced with working responsive menu
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#docs', label: 'Docs' },
    { href: '#blog', label: 'Blog' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-900 via-[#394a4f] to-[#4e4650] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-10 items-center justify-center">
            <button 
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
            >
              <FaStarOfLife className="h-5 w-5 text-white fill-current" />
              <span className="text-lg font-medium">scout</span>
            </button>

             {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white text-sm font-normal transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 bg-[#53505a] border-white hover:text-white hover:bg-gray-800 font-normal rounded-2xl px-4"
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100 font-normal px-4 rounded-2xl"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-[#000]"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white text-sm font-normal transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-2 px-3 space-y-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-gray-300 bg-[#53505a] border-white hover:text-white hover:bg-gray-800 font-normal rounded-2xl px-4"
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-normal px-4 rounded-2xl"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;