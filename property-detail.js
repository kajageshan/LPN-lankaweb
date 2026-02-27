const properties = {
    "1": {
        title: "Luxury Villa with Pool",
        location: "Beverly Hills, CA",
        price: "$2,800",
        status: "Featured",
        description: "Experience the pinnacle of luxury living in this architectural masterpiece located in the heart of Beverly Hills. This stunning villa boasts an open-concept design with floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with state-of-the-art appliances, perfect for the aspiring chef. Outside, you'll find a private oasis featuring a resort-style swimming pool, lush landscaping, and a spacious terrace ideal for entertaining guests. Every detail of this home has been meticulously crafted to provide the ultimate in comfort and style.",
        amenities: [
            { icon: "fa-swimming-pool", text: "Private Pool" },
            { icon: "fa-leaf", text: "Lush Garden" },
            { icon: "fa-dumbbell", text: "Home Gym" },
            { icon: "fa-video", text: "Home Theater" },
            { icon: "fa-utensils", text: "Chef's Kitchen" },
            { icon: "fa-car", text: "3-Car Garage" },
            { icon: "fa-shield-alt", text: "24/7 Security" },
            { icon: "fa-wifi", text: "Smart Home System" }
        ],
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "2": {
        title: "Modern Downtown Apartment",
        location: "Manhattan, NY",
        price: "$1,950",
        status: "For Rent",
        description: "This chic and modern apartment offers the perfect urban lifestyle in the vibrant heart of Downtown Manhattan. Featuring sleek hardwood floors, contemporary finishes, and breathtaking city skyline views, this unit is a true gem. The open-plan living area is perfect for both relaxation and social gatherings. The building provides top-tier amenities including a state-of-the-art fitness center, a spectacular rooftop lounge, and 24-hour concierge service. Stay connected with high-speed internet and enjoy the convenience of being just steps away from the finest dining, shopping, and entertainment New York City has to offer.",
        amenities: [
            { icon: "fa-city", text: "City Views" },
            { icon: "fa-wifi", text: "High Speed Fiber" },
            { icon: "fa-dumbbell", text: "Fitness Center" },
            { icon: "fa-building", text: "Rooftop Lounge" },
            { icon: "fa-user-tie", text: "24/7 Concierge" },
            { icon: "fa-couch", text: "Fully Furnished" },
            { icon: "fa-door-open", text: "Private Balcony" },
            { icon: "fa-laundry", text: "In-unit Laundry" }
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-61dc36dc98ce?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "3": {
        title: "Stunning Penthouse Suite",
        location: "Miami Beach, FL",
        price: "$5,500",
        status: "Premium",
        description: "Indulge in unparalleled coastal luxury in this magnificent penthouse overlooking the pristine waters of Miami Beach. This expansive residence features a wraparound balcony that offers panoramic views of the Atlantic Ocean and the city skyline. The interior is a showcase of sophisticated design, with ultra-premium materials and custom finishes throughout. Enjoy private elevator access leading directly into your foyer. The master suite is a sanctuary of its own, featuring a spa-like bath and direct balcony access. With an infinity pool, a climate-controlled wine cellar, and exclusive access to beach club amenities, this penthouse redefines the meaning of high-end living.",
        amenities: [
            { icon: "fa-water", text: "Ocean Front" },
            { icon: "fa-elevator", text: "Private Elevator" },
            { icon: "fa-border-all", text: "Wraparound Balcony" },
            { icon: "fa-swimming-pool", text: "Private Infinity Pool" },
            { icon: "fa-wine-glass", text: "Wine Cellar" },
            { icon: "fa-spa", text: "Luxury Spa Bath" },
            { icon: "fa-umbrella-beach", text: "Beach Club Access" },
            { icon: "fa-parking", text: "Valet Parking" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1353&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c1b2f6ef13?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492493-094701267817?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dcea464f9?auto=format&fit=crop&w=800&q=80"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const propId = urlParams.get('id');

    if (!propId || !properties[propId]) {
        // Fallback or error handling
        document.body.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Inter', sans-serif;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Oops!</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Property not found or invalid ID.</p>
                <a href="rental.html" style="padding: 1rem 2rem; background: #00d4aa; color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">Back to Rentals</a>
            </div>
        `;
        return;
    }

    const prop = properties[propId];
    let currentImgIndex = 0;

    // Populate data
    document.getElementById('prop-title').textContent = prop.title;
    document.getElementById('breadcrumb-title').textContent = prop.title;
    document.getElementById('prop-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${prop.location}`;
    document.getElementById('prop-price').textContent = `${prop.price}/month`;
    document.getElementById('prop-status').textContent = prop.status;
    document.getElementById('prop-description').textContent = prop.description;

    // Gallery
    const mainImg = document.getElementById('main-img');
    mainImg.src = prop.images[0];
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', () => openLightbox(0));

    const thumbGrid = document.querySelector('.thumbnail-grid');
    thumbGrid.innerHTML = '';
    prop.images.forEach((imgSrc, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumb ${index === 0 ? 'active' : ''}`;
        thumbDiv.innerHTML = `<img src="${imgSrc}" alt="View ${index + 1}">`;
        thumbDiv.addEventListener('click', () => {
            currentImgIndex = index;
            mainImg.src = imgSrc;
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            thumbDiv.classList.add('active');
        });
        thumbGrid.appendChild(thumbDiv);
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    function openLightbox(index) {
        currentImgIndex = index;
        lightboxImg.src = prop.images[currentImgIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showPrev() {
        currentImgIndex = (currentImgIndex - 1 + prop.images.length) % prop.images.length;
        lightboxImg.src = prop.images[currentImgIndex];
    }

    function showNext() {
        currentImgIndex = (currentImgIndex + 1) % prop.images.length;
        lightboxImg.src = prop.images[currentImgIndex];
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    lightbox.addEventListener('click', closeLightbox);
    lightboxImg.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // Amenities
    const amenitiesGrid = document.getElementById('prop-amenities');
    amenitiesGrid.innerHTML = '';
    prop.amenities.forEach(amenity => {
        const item = document.createElement('div');
        item.className = 'amenity-item';
        item.innerHTML = `
            <i class="fas ${amenity.icon}"></i>
            <span>${amenity.text}</span>
        `;
        amenitiesGrid.appendChild(item);
    });

    // Handle form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! Our agent will contact you soon.');
        form.reset();
    });
});
