// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaTelegram, FaInstagram } from "react-icons/fa6";
import Logo from "../../assets/Images/logo.jpeg";

// Wallet hooks
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/whitepaper.pdf", label: "Whitepaper" },
  { href: "#audit", label: "Audit" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const half = Math.ceil(links.length / 2);
  const leftLinks = links.slice(0, half);
  const rightLinks = links.slice(half);

  // Wallet connectivity
  const { connected, disconnect, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const handleWalletConnect = () => {
    if (!connected) {
      setVisible(true);
    } else {
      disconnect();
    }
  };

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMobile) setIsOpen(false);
    }
  };

  const menuVariants = {
    left: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
    },
    right: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const updateMobileView = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMobileView();
    window.addEventListener("resize", updateMobileView);
    return () => window.removeEventListener("resize", updateMobileView);
  }, []);

  return (
    <div className="flex justify-between items-center bg-transparent relative z-30 px-6 py-4">
      {/* Social Media Icons */}
      <div className="flex gap-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 md:flex hidden border-white rounded-full size-16 items-center justify-center hover:text-black transition"
        >
          <FaXTwitter className="text-white text-3xl" />
        </a>
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white rounded-full size-16 md:flex hidden items-center justify-center hover:text-black transition"
        >
          <FaTelegram className="text-white md:text-3xl text-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 md:flex hidden border-white rounded-full size-16 items-center justify-center hover:text-black transition"
        >
          <FaInstagram className="text-white text-3xl" />
        </a>
      </div>

      {isMobile ? (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white rounded-full size-10 order-2 flex items-center justify-center hover:text-black transition"
            >
              <FaTelegram className="text-white text-xl" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-xl focus:outline-none"
            >
              <div className="p-2 border-2 border-white rounded-full cursor-pointer">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute left-1/2 top-52 rounded-md transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-[80%] flex flex-col justify-center items-center gap-6 py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {links.map((link) =>
                  link.href.startsWith("#") ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-2xl font-semibold hover:text-gray-300 transition"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-semibold hover:text-gray-300 transition"
                      onClick={() => setIsOpen(false)}
                      download={
                        link.href.endsWith(".pdf") ? "whitepaper.pdf" : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="relative items-center gap-8 hidden md:flex"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants.left}
                className="absolute right-32 flex gap-8 text-xl font-semibold"
              >
                {leftLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-white hover:text-gray-300 transition"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white hover:text-gray-300 transition"
                        download={
                          link.href.endsWith(".pdf")
                            ? "whitepaper.pdf"
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-2 border-2 border-white rounded-full cursor-pointer ml-12 flex-shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={90}
              height={90}
              className="rounded-full"
            />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants.right}
                className="absolute left-44 flex gap-6 text-xl font-semibold"
              >
                {rightLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-white hover:text-gray-300 transition"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white hover:text-gray-300 transition"
                        download={
                          link.href.endsWith(".pdf")
                            ? "whitepaper.pdf"
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Wallet Button */}
      <button
        onClick={handleWalletConnect}
        className="md:px-6 md:py-4 px-4 py-2 border-2 border-white text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-black transition md:text-3xl text-lg text-nowrap"
      >
        {connected ? "DISCONNECT WALLET" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Navbar;
