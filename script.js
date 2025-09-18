// Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle menu function
        function toggleMenu() {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Prevent background scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Add click event to mobile menu button
        mobileMenu.addEventListener('click', toggleMenu);

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Add subtle animation to the background elements
        document.addEventListener('DOMContentLoaded', function() {
            const bg1 = document.querySelector('.bg-1');
            const bg2 = document.querySelector('.bg-2');
            
            // Animate background elements on scroll
            window.addEventListener('scroll', function() {
                const scrollY = window.scrollY;
                if (bg1) bg1.style.transform = `translateY(${scrollY * 0.1}px)`;
                if (bg2) bg2.style.transform = `translateY(${scrollY * 0.05}px)`;
            });
            
            // Add intersection observer for fade-in effect
            const aboutSection = document.querySelector('.about-section');
            const aboutContent = document.querySelector('.about-content');
            const aboutPhoto = document.querySelector('.about-photo');
            
            if (aboutSection && aboutContent && aboutPhoto) {
                const observerOptions = {
                    threshold: 0.2,
                    rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            aboutContent.style.animation = 'fadeInUp 0.8s ease forwards';
                            aboutPhoto.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
                            aboutContent.style.opacity = '0';
                            aboutPhoto.style.opacity = '0';
                        }
                    });
                }, observerOptions);
                
                observer.observe(aboutSection);
            }
            
            // Add CSS for fadeInUp animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .about-content, .about-photo {
                    opacity: 0;
                }
            `;
            document.head.appendChild(style);
        });