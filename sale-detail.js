const properties = {
    "s1": {
        title: "Modern Luxury Villa",
        location: "Colombo 07, SL",
        price: "$450,000",
        type: "sale",
        status: "Featured",
        description: "A masterpiece of modern architecture in the most prestigious neighborhood of Colombo. This luxury villa offers an unparalleled combination of space, style, and security. Featuring high ceilings, imported marble flooring, and a state-of-the-art kitchen. The landscaped garden and private pool provide a serene escape from the city hustle. Perfect for families seeking a premium lifestyle.",
        amenities: [
            { icon: "fa-swimming-pool", text: "Swimming Pool" },
            { icon: "fa-shield-alt", text: "Smart Security" },
            { icon: "fa-car", text: "4 Car Parking" },
            { icon: "fa-leaf", text: "Large Garden" },
            { icon: "fa-wifi", text: "High Speed Internet" },
            { icon: "fa-charging-station", text: "EV Charging" }
        ],
        images: [
           "img/ser1.jpg",
           "img/villa2.jpg",
           "img/villa3.jpg",
           "img/villa4.jpg",
           "img/villa5.jpg"
        ]
    },
    "s2": {
        title: "Residential Land Plot",
        location: "Malabe, SL",
        price: "$125,000",
        type: "sale",
        status: "For Sale",
        description: "Primely located 20 perch land plot in a highly residential area of Malabe. Just 5 minutes away from the highway interchange and major educational institutions. Flat rectangular land with 20ft wide road access. Ideal for building your dream home or as a solid investment with high growth potential.",
        amenities: [
            { icon: "fa-road", text: "20ft Road" },
            { icon: "fa-pipe", text: "Water Supply" },
            { icon: "fa-bolt", text: "Electricity" },
            { icon: "fa-map", text: "Rectangular" },
            { icon: "fa-university", text: "Near Uni" }
        ],
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1524813636069-795325997607?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "s3": {
        title: "Beachfront Mansion",
        location: "Negombo, SL",
        price: "$850,000",
        type: "sale",
        status: "Premium",
        description: "Experience the ultimate beachfront lifestyle in this stunning mansion located on the golden sands of Negombo. Featuring panoramic ocean views from every room, this property is a rare gem. Private beach access, extensive outdoor entertaining areas, and high-end finishes throughout. A true sanctuary for those who appreciate the finer things in life.",
        amenities: [
            { icon: "fa-water", text: "Private Beach" },
            { icon: "fa-umbrella-beach", text: "Sea View" },
            { icon: "fa-cocktail", text: "Beach Bar" },
            { icon: "fa-expand", text: "Huge Patio" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&w=1353&q=80",
            "https://images.unsplash.com/photo-1512915922610-3964af059278?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const propId = urlParams.get('id');

    if (!propId || !properties[propId]) {
        document.body.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; text-align: center; padding: 20px;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Oops!</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Property not found or invalid ID.</p>
                <a href="sale.html" style="padding: 1rem 2rem; background: #1083b9; color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">Back to Sales</a>
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
    document.getElementById('prop-price').textContent = prop.price;
    document.getElementById('prop-status').textContent = prop.status;
    document.getElementById('prop-description').textContent = prop.description;

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
        document.body.style.overflow = 'hidden'; // Prevent scrolling
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

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

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

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! Our agent will contact you soon.');
            form.reset();
        });
    }
});
