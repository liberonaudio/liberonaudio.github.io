/* ============================================
   LIBERONAUDIO — MAIN JS
   ============================================
   Shared functionality across all pages.
   Requires data.js to be loaded first.
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       LOADER
       ============================================ */
    function initLoader() {
        const el = document.getElementById('loaderText');
        if (!el) return;
        const text = SITE_DATA.business.name;
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.05}s`;
            el.appendChild(span);
        });
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1200);
        });
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    function initNav() {
        const nav = document.getElementById('nav');
        if (!nav) return;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    nav.classList.toggle('scrolled', window.scrollY > 80);
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Mobile toggle
        const toggle = document.getElementById('navToggle');
        const links = document.getElementById('navLinks');
        if (toggle && links) {
            toggle.addEventListener('click', () => links.classList.toggle('open'));
            links.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => links.classList.remove('open'));
            });
        }

        // Active page highlight
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        nav.querySelectorAll('.nav-links a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === currentPage || (currentPage === 'index.html' && href.startsWith('#'))) {
                // handled by scroll for index
            } else if (href === currentPage) {
                a.classList.add('active');
            }
        });
    }

    /* ============================================
       SCROLL REVEAL (Intersection Observer)
       ============================================ */
    function initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    }

    /* ============================================
       PARALLAX (hero only)
       ============================================ */
    function initParallax() {
        const hero = document.getElementById('hero');
        if (!hero) return;
        const title = hero.querySelector('.hero-title');
        const tagline = hero.querySelector('.hero-tagline');
        if (!title) return;

        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll < window.innerHeight) {
                const factor = scroll / window.innerHeight;
                title.style.transform = `translateY(${scroll * 0.15}px)`;
                title.style.opacity = 1 - factor * 0.8;
                if (tagline) {
                    tagline.style.transform = `translateY(${scroll * 0.08}px)`;
                    tagline.style.opacity = 1 - factor * 1.2;
                }
            }
        });
    }

    /* ============================================
       RENDER BRANDS
       Checks for logo image in img/brands/.
       If logo exists → shows logo, hover reveals name+country.
       If no logo → shows name+country always.
       ============================================ */
    function renderBrands() {
        const grid = document.getElementById('brandsGrid');
        if (!grid) return;

        SITE_DATA.brands.forEach(brand => {
            const cell = document.createElement('div');
            cell.className = 'brand-cell';

            if (brand.logo) {
                // Try to show logo
                const img = document.createElement('img');
                img.className = 'brand-logo';
                img.alt = brand.name;
                img.loading = 'lazy';
                img.src = `img/brands/${brand.logo}`;

                // If image fails to load, fallback to text-only
                img.onerror = function() {
                    this.remove();
                    cell.classList.add('brand-cell--no-logo');
                };

                cell.appendChild(img);
            } else {
                cell.classList.add('brand-cell--no-logo');
            }

            // Info overlay (always present, shown on hover or as fallback)
            const info = document.createElement('div');
            info.className = 'brand-info';
            info.innerHTML = `
                <div class="brand-name">${brand.name}</div>
                <div class="brand-country">${brand.country}</div>
            `;
            cell.appendChild(info);

            grid.appendChild(cell);
        });
    }

    /* ============================================
       RENDER SERVICES
       ============================================ */
    function renderServices() {
        const grid = document.querySelector('.services-grid');
        if (!grid || !SITE_DATA.services) return;

        // Only render if grid is empty (not pre-filled in HTML)
        if (grid.children.length > 0) return;

        SITE_DATA.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="service-number">${service.number}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            `;
            grid.appendChild(card);
        });
    }

    /* ============================================
       RENDER CONTACT INFO
       ============================================ */
    function renderContact() {
        const el = document.getElementById('contactInfo');
        if (!el || !SITE_DATA.contact) return;

        const c = SITE_DATA.contact;
        el.innerHTML = `
            <div class="contact-info-item reveal">
                <div class="contact-label">Ubicación</div>
                <div class="contact-value">${c.address}</div>
            </div>
            <div class="contact-info-item reveal reveal-delay-1">
                <div class="contact-label">Teléfono</div>
                <div class="contact-value"><a href="tel:${c.phone.replace(/\s/g, '')}">${c.phone}</a></div>
            </div>
            <div class="contact-info-item reveal reveal-delay-2">
                <div class="contact-label">Email</div>
                <div class="contact-value"><a href="mailto:${c.email}">${c.email}</a></div>
            </div>
            <div class="contact-info-item reveal reveal-delay-3">
                <div class="contact-label">Horario</div>
                <div class="contact-value">${c.hours}</div>
            </div>
            <div class="contact-info-item reveal reveal-delay-4">
                <div class="contact-label">Cita previa</div>
                <div class="contact-value">${c.appointment}</div>
            </div>
        `;
    }

    /* ============================================
       INIT
       ============================================ */
    initLoader();
    initNav();
    renderBrands();
    renderServices();
    renderContact();

    // Reveal & parallax after DOM content loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initReveal();
            initParallax();
        });
    } else {
        initReveal();
        initParallax();
    }

})();
