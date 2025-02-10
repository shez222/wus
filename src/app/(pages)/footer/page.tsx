// components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer: React.FC = () => {
  const { connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleWalletConnect = () => {
    if (!connected) {
      setVisible(true);
    } else {
      disconnect();
    }
  };

  return (
    <footer className="relative text-white p-8 flex flex-col items-center text-center bg-black/80">
      {/* Footer Links */}
      <motion.div
        className="relative container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {["ABOUT", "DOCS", "TERMS", "SOCIALS"].map((title) => (
          <motion.div key={title} variants={fadeIn}>
            <h3 className="font-bold mb-2 text-white">{title}</h3>
            <ul>
              {title === "ABOUT" && (
                <>
                  <li>
                    <a href="#" className="hover:text-white">
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      How to Buy
                    </a>
                  </li>
                </>
              )}
              {title === "DOCS" && (
                <>
                  <li>
                    <a href="#" className="hover:text-white">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Audit
                    </a>
                  </li>
                </>
              )}
              {title === "TERMS" && (
                <>
                  <li>
                    <a href="#" className="hover:text-white">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Use
                    </a>
                  </li>
                </>
              )}
              {title === "SOCIALS" && (
                <>
                  <li>
                    <a href="#" className="hover:text-white">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Medium
                    </a>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="relative text-center text-sm text-gray-400 mt-12"
        variants={fadeIn}
      >
        <p>
          Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.
          The value of cryptocurrencies may go down as well as up. Profits may
          be subject to capital gains or other taxes applicable in your jurisdiction.
        </p>
        <p className="mt-2">© 2024 WUSLE. All Rights Reserved.</p>
      </motion.div>

      {/* Wallet Button */}
      <motion.div className="relative mt-4 flex justify-center" variants={fadeIn}>
        <button
          onClick={handleWalletConnect}
          className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-300 transition font-medium"
        >
          {connected ? "DISCONNECT WALLET" : "Connect Wallet"}
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
