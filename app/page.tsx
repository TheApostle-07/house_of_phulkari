"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Enhanced data for featured products
  const products = [
    {
      id: 1,
      name: "Cotton Chikankari Solid Women's Long Kurta - White",
      desc: "A beautiful hand-crafted kurta with vibrant threads and authentic Phulkari vibes.",
      price: "₹3,650",
      image: "/images/phulkari_dupatta.webp",
      colors: ["#000000", "#ffffe6", "#f5f5f5"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      justIn: true,
    },
    {
      id: 2,
      name: "Cotton Chikankari Solid Women's Long Kurta - Black",
      desc: "Wrap yourself in elegance with this warm, intricate kurta adorned in classic patterns.",
      price: "₹3,650",
      image: "/images/phulkari_shawl.webp",
      colors: ["#000000", "#f5f5f5"],
      sizes: ["S", "M", "L", "XL", "3XL"],
      justIn: true,
    },
    {
      id: 3,
      name: "Phulkari Bag",
      desc: "Stand out with a statement bag that is fashionable, functional, and culturally inspired.",
      price: "₹1,299",
      image: "/images/phulkari_bag.webp",
      colors: ["#ccc", "#000000"],
      sizes: [],
      justIn: false,
    },
    {
      id: 4,
      name: "Phulkari Stole",
      desc: "Elevate any outfit with this lightweight, colorful stole—perfect for all occasions.",
      price: "₹999",
      image: "/images/phulkari_stole.avif",
      colors: ["#d4af37"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      justIn: true,
    },
  ];

  // Simulate adding product to cart
  const addToCart = (productName: string) => {
    alert(`${productName} has been added to your cart!`);
  };

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>House of Phulkari</div>

        {/* Desktop Nav Links */}
        <div className={styles.desktopNavLinks}>
          <a href="#hero">Home</a>
          <a href="#featured">Shop</a>
          <a href="#about">About Us</a>
          <a href="#">Contact</a>
        </div>

        {/* Hamburger button (for mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Nav drawer (mobile menu) */}
        <div className={`${styles.navDrawer} ${menuOpen ? styles.navActive : ""}`}>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className={styles.navLinks} onClick={() => setMenuOpen(false)}>
            <a href="#hero">Home</a>
            <a href="#featured">Shop</a>
            <a href="#about">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Experience Phulkari</h1>
          <p>
            Embrace the vibrant colors, intricate designs, and cultural richness of traditional Phulkari craftsmanship.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className={styles.featuredProducts}>
        <h2>Featured Collections</h2>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              {/* Top Row: Wishlist icon & 'Just In' label */}
              <div className={styles.productTopBar}>
                <button className={styles.wishlistBtn} aria-label="Add to Wishlist">
                  ♥
                </button>
                {product.justIn && <div className={styles.justInLabel}>Just In</div>}
              </div>

              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain", objectPosition: "top" }}
                />
              </div>

              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className={styles.price}>{product.price}</div>

                {/* Color Swatches */}
                {product.colors?.length > 0 && (
                  <div className={styles.colorRow}>
                    {product.colors.map((color, idx) => (
                      <span key={idx} className={styles.swatch} style={{ backgroundColor: color }} />
                    ))}
                  </div>
                )}

                {/* Size Options */}
                {product.sizes?.length > 0 && (
                  <div className={styles.sizeRow}>
                    {product.sizes.map((size) => (
                      <span key={size} className={styles.sizeOption}>
                        {size}
                      </span>
                    ))}
                  </div>
                )}

                <button onClick={() => addToCart(product.name)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About/Story Section */}
      <section id="about" className={styles.aboutUs}>
        <h2>Our Story</h2>
        <p>
          House of Phulkari celebrates the age-old craft of Phulkari—literally meaning “flower work.” Each piece is lovingly created with meticulous attention to detail, reflecting a tradition that has been passed down for generations. Our mission is to bring this radiant heritage to you, blending traditional artistry with modern aesthetics.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} House of Phulkari. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}
