  // Events data
        const eventsData = [
            {
                id: 1,
                title: "AI & Machine Learning Summit",
                date: "March 15, 2024",
                description: "Deep dive into the latest AI technologies and machine learning algorithms with industry experts.",
                icon: "fas fa-brain"
            },
            {
                id: 2,
                title: "Cybersecurity Workshop",
                date: "March 22, 2024",
                description: "Learn essential cybersecurity skills and protect digital assets from emerging threats.",
                icon: "fas fa-shield-alt"
            },
            {
                id: 3,
                title: "Full Stack Development Bootcamp",
                date: "April 5, 2024",
                description: "Master modern web development with hands-on projects and industry mentorship.",
                icon: "fas fa-code"
            },
            {
                id: 4,
                title: "Data Science Symposium",
                date: "April 12, 2024",
                description: "Explore data analytics, visualization, and big data technologies with real-world applications.",
                icon: "fas fa-chart-line"
            },
            {
                id: 5,
                title: "Mobile App Development",
                date: "April 20, 2024",
                description: "Build cross-platform mobile applications using latest frameworks and technologies.",
                icon: "fas fa-mobile-alt"
            },
            {
                id: 6,
                title: "Cloud Computing Conference",
                date: "May 3, 2024",
                description: "Discover cloud architectures, DevOps practices, and serverless computing solutions.",
                icon: "fas fa-cloud"
            },
            {
                id: 7,
                title: "Blockchain & Cryptocurrency",
                date: "May 10, 2024",
                description: "Understanding blockchain technology and its applications in modern finance.",
                icon: "fas fa-coins"
            },
            {
                id: 8,
                title: "UI/UX Design Masterclass",
                date: "May 18, 2024",
                description: "Create stunning user interfaces and experiences with modern design principles.",
                icon: "fas fa-palette"
            },
            {
                id: 9,
                title: "Quantum Computing Intro",
                date: "May 25, 2024",
                description: "Explore the future of computing with quantum algorithms and quantum programming.",
                icon: "fas fa-atom"
            },
            {
                id: 10,
                title: "Tech Entrepreneurship Summit",
                date: "June 1, 2024",
                description: "Learn how to turn your tech ideas into successful startups and businesses.",
                icon: "fas fa-rocket"
            },
            {
                id: 11,
                title: "IoT & Smart Systems",
                date: "June 8, 2024",
                description: "Build connected devices and smart systems for the Internet of Things ecosystem.",
                icon: "fas fa-wifi"
            },
            {
                id: 12,
                title: "Game Development Workshop",
                date: "June 15, 2024",
                description: "Create engaging games using modern game engines and development frameworks.",
                icon: "fas fa-gamepad"
            },
            {
                id: 13,
                title: "AR/VR Innovation Lab",
                date: "June 22, 2024",
                description: "Develop immersive experiences using augmented and virtual reality technologies.",
                icon: "fas fa-vr-cardboard"
            },
            {
                id: 14,
                title: "DevOps & Automation",
                date: "June 29, 2024",
                description: "Streamline development workflows with continuous integration and deployment.",
                icon: "fas fa-cogs"
            },
            {
                id: 15,
                title: "Annual Tech Conference",
                date: "July 15, 2024",
                description: "Our flagship event bringing together the entire NACOS community for networking and learning.",
                icon: "fas fa-users"
            }
        ];

        // Pagination variables
        let currentPage = 1;
        const eventsPerPage = 9;
        let totalPages = Math.ceil(eventsData.length / eventsPerPage);

        // Function to render events
        function renderEvents() {
            const eventsGrid = document.getElementById('eventsGrid');
            const startIndex = (currentPage - 1) * eventsPerPage;
            const endIndex = startIndex + eventsPerPage;
            const currentEvents = eventsData.slice(startIndex, endIndex);

            eventsGrid.innerHTML = currentEvents.map(event => `
                <div class="event-card">
                    <div class="event-image">
                        <i class="${event.icon} event-icon"></i>
                    </div>
                    <div class="event-content">
                        <div class="event-date">${event.date}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <a href="#" class="event-cta">Register Now</a>
                    </div>
                </div>
            `).join('');

            // Add entrance animation
            const eventCards = document.querySelectorAll('.event-card');
            eventCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Function to render pagination
        function renderPagination() {
            const pagination = document.getElementById('pagination');
            let paginationHTML = '';

            // Previous button
            if (currentPage > 1) {
                paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})">‹</button>`;
            }

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                if (i === currentPage) {
                    paginationHTML += `<button class="pagination-btn active" onclick="goToPage(${i})">${i}</button>`;
                } else if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationHTML += `<button class="pagination-btn" onclick="goToPage(${i})">${i}</button>`;
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    paginationHTML += `<span class="pagination-dots">...</span>`;
                }
            }

            // Next button
            if (currentPage < totalPages) {
                paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})">›</button>`;
            }

            pagination.innerHTML = paginationHTML;
        }

        // Function to go to specific page
        function goToPage(page) {
            currentPage = page;
            renderEvents();
            renderPagination();
            
            // Smooth scroll to events section
            document.getElementById('events').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Auto-scroll functionality
        let autoScrollInterval;
        let isAutoScrolling = false;

        function startAutoScroll() {
            if (!isAutoScrolling) {
                isAutoScrolling = true;
                autoScrollInterval = setInterval(() => {
                    if (currentPage < totalPages) {
                        goToPage(currentPage + 1);
                    } else {
                        goToPage(1);
                    }
                }, 5000); // Change page every 5 seconds
            }
        }

        function stopAutoScroll() {
            if (isAutoScrolling) {
                isAutoScrolling = false;
                clearInterval(autoScrollInterval);
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Scroll to top functionality
        function initScrollToTop() {
            const scrollTopBtn = document.getElementById('scrollTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Intersection Observer for animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animateElements = document.querySelectorAll('.about-text, .stat-card, .section-header');
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });
        }

        // Navigation background change on scroll
        function initNavScroll() {
            const nav = document.querySelector('.nav-container');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    nav.style.background = 'rgba(10, 10, 10, 0.95)';
                    nav.style.backdropFilter = 'blur(30px)';
                } else {
                    nav.style.background = 'rgba(10, 10, 10, 0.9)';
                    nav.style.backdropFilter = 'blur(30px)';
                }
            });
        }

        // Auto-scroll control based on user interaction
        function initAutoScrollControl() {
            const eventsSection = document.getElementById('events');
            const pagination = document.getElementById('pagination');
            
            // Stop auto-scroll when user interacts with pagination
            pagination.addEventListener('click', () => {
                stopAutoScroll();
                // Restart auto-scroll after 10 seconds of no interaction
                setTimeout(() => {
                    startAutoScroll();
                }, 10000);
            });

            // Start auto-scroll when events section is visible
            const eventObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startAutoScroll();
                    } else {
                        stopAutoScroll();
                    }
                });
            }, { threshold: 0.3 });

            eventObserver.observe(eventsSection);
        }

        // Parallax effect for hero section
        function initParallax() {
            const heroSection = document.querySelector('.hero-section');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (heroSection) {
                    heroSection.style.transform = `translateY(${rate}px)`;
                }
            });
        }

        // Dynamic text animation
        function initDynamicText() {
            const texts = [
                'Future Tech Leaders',
                'Innovation Pioneers',
                'Code Enthusiasts',
                'Digital Innovators',
                'Tech Visionaries'
            ];
            
            const badgeText = document.querySelector('.badge-text');
            let currentIndex = 0;
            
            setInterval(() => {
                badgeText.style.opacity = '0';
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % texts.length;
                    badgeText.textContent = `🚀 ${texts[currentIndex]}`;
                    badgeText.style.opacity = '1';
                }, 300);
            }, 3000);
        }

        // Loading animation
        function initLoadingAnimation() {
            // Add loading class to body
            document.body.classList.add('loading');
            
            // Remove loading class after page loads
            window.addEventListener('load', () => {
                setTimeout(() => {
                    document.body.classList.remove('loading');
                }, 500);
            });
        }

        // Initialize all functions
        document.addEventListener('DOMContentLoaded', function() {
            renderEvents();
            renderPagination();
            initSmoothScrolling();
            initScrollToTop();
            initScrollAnimations();
            initNavScroll();
            initAutoScrollControl();
            initParallax();
            initDynamicText();
            initLoadingAnimation();
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate canvas size if needed
            const canvas = document.getElementById('particles');
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && currentPage > 1) {
                goToPage(currentPage - 1);
            } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });

        // Mobile menu toggle (if needed)
        function initMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.style.display = 'none';
            
            // Add mobile menu styles
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                        background: none;
                        border: none;
                        color: white;
                        font-size: 1.5rem;
                        cursor: pointer;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 80px;
                        left: -100%;
                        width: 100%;
                        height: calc(100vh - 80px);
                        background: rgba(10, 10, 10, 0.95);
                        backdrop-filter: blur(30px);
                        flex-direction: column;
                        justify-content: flex-start;
                        padding-top: 2rem;
                        transition: left 0.3s ease;
                        z-index: 999;
                    }
                    
                    .nav-links.active {
                        left: 0;
                    }
                    
                    .nav-link {
                        font-size: 1.2rem;
                        padding: 1rem 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            document.querySelector('.nav-content').appendChild(mobileMenuBtn);
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Initialize mobile menu
        initMobileMenu();