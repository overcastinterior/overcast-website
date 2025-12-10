"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/../public/images/logo.svg";
import Button from "./small/Button";
import headerData from "../../lib/data/home/header.json";
import serviceData from "../../lib/data/home/about.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="relative z-50 rounded-2xl lg:rounded-full bg-white/30">
      <div className="px-1.5 sm:px-2 lg:px-3 w-full">
        <div className="flex items-center justify-between py-1.5 xl:py-2.5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Link href="/" className="block">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-32 lg:w-40 xl:w-48 object-fill"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {headerData.menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button className="text-white hover:text-primary px-4 py-3 text-sm font-golos font-medium transition-colors duration-200 flex items-center gap-1">
                      {item.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 py-3 z-50"
                        >
                          {serviceData.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                href={service.link}
                                className="block px-4 py-3 text-gray-800 hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-golos font-medium rounded-lg mx-2"
                              >
                                {service.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary px-4 py-3 text-sm font-golos font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Sign In Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button text="Contact Us" options="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 p-2 transition-colors duration-200 bg-white/20 rounded-[40%]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <div
              className="md:hidden border-t border-white/20" 
            >
              <div
                className="py-4 space-y-2" 
              >
                {headerData.menuItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="w-full flex items-center justify-between text-black hover:text-gray-900 hover:bg-gray-50 px-4 py-2 text-base font-golos font-medium rounded-md transition-colors duration-200"
                        >
                          {item.name}
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden bg-gray-50 rounded-lg mx-2 mt-1"
                            >
                              {serviceData.map((service, index) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05, duration: 0.2 }}
                                >
                                  <Link
                                    href={service.link}
                                    className="block text-gray-600 hover:text-primary hover:bg-white px-6 py-2 text-sm font-golos font-medium transition-colors duration-200"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }}
                                  >
                                    {service.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-black hover:text-gray-900 hover:bg-gray-50 px-4 py-2 text-base font-golos font-medium rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div
                  className="pt-4 border-t border-gray-200 mt-4 space-y-2" 
                >
                  <button className="w-full text-left bg-primary text-white hover:bg-gray-800 px-4 py-3 rounded-[20px] text-base font-golos font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden group">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
