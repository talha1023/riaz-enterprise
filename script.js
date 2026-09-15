/* ============================================
   RIAZ ENTERPRISE - JAVASCRIPT
   ============================================ */

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// FEATURED PRODUCTS DATA
// ============================================
const featuredProducts = [
    {
        name: 'GearX X3 Helmet',
        description: 'Premium full-face helmet with advanced safety features and aerodynamic design.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
        name: 'LED Headlight Pro',
        description: 'Ultra-bright LED headlight system with adaptive lighting technology.',
        image: 'https://images.unsplash.com/photo-1606611013016-969bfba1c72f?w=400&h=300&fit=crop'
    },
    {
        name: 'Premium Riding Gloves',
        description: 'Protective gloves with reinforced knuckles and touchscreen compatibility.',
        image: 'https://images.unsplash.com/photo-1577720643272-265f434f8e9a?w=400&h=300&fit=crop'
    },
    {
        name: 'Bluetooth Communicator',
        description: 'Wireless communication system for riders with crystal clear audio.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    },
    {
        name: 'Disc Lock Security',
        description: 'High-security disc lock with alarm system to protect your motorcycle.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
        name: 'Riding Jacket',
        description: 'Premium protective jacket with armor plating and waterproof material.',
        image: 'https://images.unsplash.com/photo-1578762996442-48f60103fc96?w=400&h=300&fit=crop'
    }
];

// ============================================
// HELMETS DATA
// ============================================
const helmets = [
    {
        name: 'GearX X3',
        description: 'Full-face helmet with DOT certified protection',
        icon: '🪖'
    },
    {
        name: 'GearX X1GT',
        description: 'Sport-touring helmet with integrated visor',
        icon: '🪖'
    },
    {
        name: 'AXXIS Helmets',
        description: 'Lightweight design with superior ventilation',
        icon: '🪖'
    },
    {
        name: 'KYT Helmets',
        description: 'Professional-grade safety helmets',
        icon: '🪖'
    },
    {
        name: 'SOMAN Helmets',
        description: 'Stylish and comfortable protection',
        icon: '🪖'
    }
];

// ============================================
// ACCESSORIES DATA
// ============================================
const accessories = [
    {
        name: 'Riding Gloves',
        description: 'Premium protective gloves',
        icon: '🧤'
    },
    {
        name: 'Bluetooth Communicators',
        description: 'Smart communication system',
        icon: '🔊'
    },
    {
        name: 'Disc Locks',
        description: 'Advanced security system',
        icon: '🔒'
    },
    {
        name: 'Engine Flashers',
        description: 'Safety lighting system',
        icon: '⚡'
    },
    {
        name: 'Bike Seat Pillows',
        description: 'Comfort enhancement cushion',
        icon: '🛋️'
    },
    {
        name: 'Key Rings',
        description: 'Durable key holders',
        icon: '🔑'
    },
    {
        name: 'Riding Gear',
        description: 'Complete protection wear',
        icon: '👕'
    }
];

// ============================================
// GALLERY DATA
// ============================================
const galleryImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1606611013016-969bfba1c72f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1577720643272-265f434f8e9a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578762996442-48f60103fc96?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1606611013016-969bfba1c72f?w=400&h=400&fit=crop'
];

// ============================================
// RENDER FEATURED PRODUCTS
// ============================================
function renderFeaturedProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-buttons">
                    <button class="btn btn-primary" onclick="viewProductDetails('${product.name}')">VIEW DETAILS</button>
                    <button class="btn btn-secondary" onclick="contactForProduct('${product.name}')">CONTACT</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ============================================
// RENDER HELMETS
// ============================================
function renderHelmets() {
    const helmetsGrid = document.getElementById('helmetsGrid');
    helmetsGrid.innerHTML = '';

    helmets.forEach(helmet => {
        const helmetCard = document.createElement('div');
        helmetCard.className = 'helmet-card';
        helmetCard.innerHTML = `
            <div class="helmet-icon">${helmet.icon}</div>
            <h3>${helmet.name}</h3>
            <p>${helmet.description}</p>
            <button class="btn btn-primary" onclick="contactForProduct('${helmet.name}')">INQUIRE NOW</button>
        `;
        helmetsGrid.appendChild(helmetCard);
    });
}

// ============================================
// RENDER ACCESSORIES
// ============================================
function renderAccessories() {
    const accessoriesGrid = document.getElementById('accessoriesGrid');
    accessoriesGrid.innerHTML = '';

    accessories.forEach(accessory => {
        const accessoryCard = document.createElement('div');
        accessoryCard.className = 'accessory-card';
        accessoryCard.innerHTML = `
            <div class="accessory-icon">${accessory.icon}</div>
            <h3>${accessory.name}</h3>
            <p>${accessory.description}</p>
        `;
        accessoriesGrid.appendChild(accessoryCard);
    });
}

// ============================================
// RENDER GALLERY
// ============================================
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image}" alt="Gallery image ${index + 1}">`;
        galleryGrid.appendChild(galleryItem);
    });
}

// ============================================
// PRODUCT INTERACTION FUNCTIONS
// ============================================
function viewProductDetails(productName) {
    alert(`Product Details: ${productName}\n\nFor more information about ${productName}, please contact us or visit our showroom.\n\nRiaz Enterprise\n6, Sultan Chamber, Khan-A-Sabur Road, Khulna\n📞 01712-109718 / 01923-068811`);
}

function contactForProduct(productName) {
    const message = `I'm interested in ${productName}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/8801712109718?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ADD PRODUCTS TO PAGE (Editable)
// ============================================
function addNewProduct(name, description, imageUrl) {
    const newProduct = {
        name: name,
        description: description,
        image: imageUrl
    };
    featuredProducts.push(newProduct);
    renderFeaturedProducts();
}

// Example: Uncomment to add a new product
// addNewProduct('New Product Name', 'Product description here', 'https://image-url-here.jpg');

// ============================================
// ADD HELMETS TO PAGE (Editable)
// ============================================
function addNewHelmet(name, description) {
    const newHelmet = {
        name: name,
        description: description,
        icon: '🪖'
    };
    helmets.push(newHelmet);
    renderHelmets();
}

// Example: Uncomment to add a new helmet
// addNewHelmet('New Helmet Name', 'Helmet description here');

// ============================================
// ADD GALLERY IMAGES (Editable)
// ============================================
function addGalleryImage(imageUrl) {
    galleryImages.push(imageUrl);
    renderGallery();
}

// Example: Uncomment to add gallery images
// addGalleryImage('https://your-image-url-here.jpg');

// ============================================
// INITIALIZE PAGE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    renderHelmets();
    renderAccessories();
    renderGallery();
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{4})(\d{3})(\d{5})/, '$1-$2-$3');
}

// Send email (uses mailto)
function sendEmail() {
    window.location.href = 'mailto:contact@riazenterprise.com';
}

// Open WhatsApp chat
function openWhatsApp() {
    const message = 'Hello! I would like to know more about Riaz Enterprise products.';
    window.open(`https://wa.me/8801712109718?text=${encodeURIComponent(message)}`, '_blank');
}

// Call phone number
function callPhone(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// Open Google Maps
function openGoogleMaps() {
    window.open('https://maps.google.com/maps/search/6+Sultan+Chamber+Khan-A-Sabur+Road+Khulna+Bangladesh', '_blank');
}

// ============================================
// LAZY LOADING FOR IMAGES (Performance)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// ANALYTICS HELPER (Add your tracking here)
// ============================================
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // Add your analytics tracking code here (Google Analytics, Mixpanel, etc.)
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        trackEvent('Button Clicked', {
            buttonText: e.target.textContent,
            timestamp: new Date().toISOString()
        });
    }
});

// ============================================
// CONSOLE HELPER
// ============================================
console.log('%cRIAZ ENTERPRISE', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cPremium Motorcycle Accessories & Riding Gear', 'color: #C41E3A; font-size: 14px;');
console.log('%cKhulna, Bangladesh | 01712-109718 / 01923-068811', 'color: #999; font-size: 12px;');
