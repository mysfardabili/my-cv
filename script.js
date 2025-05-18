        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                
                if (mobileMenuButton.querySelector('i').classList.contains('ri-menu-line')) {
                    mobileMenuButton.querySelector('i').classList.remove('ri-menu-line');
                    mobileMenuButton.querySelector('i').classList.add('ri-close-line');
                } else {
                    mobileMenuButton.querySelector('i').classList.remove('ri-close-line');
                    mobileMenuButton.querySelector('i').classList.add('ri-menu-line');
                }
            });
            
            // Close mobile menu when clicking on a link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.querySelector('i').classList.remove('ri-close-line');
                    mobileMenuButton.querySelector('i').classList.add('ri-menu-line');
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Back to top button
            const backToTopButton = document.getElementById('back-to-top');
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Show/hide back to top button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.scrollY > 500) {
                    backToTopButton.classList.add('opacity-100');
                    backToTopButton.classList.remove('opacity-0');
                } else {
                    backToTopButton.classList.add('opacity-0');
                    backToTopButton.classList.remove('opacity-100');
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Typing effect
            const typingElement = document.getElementById('typing-name');
            const text = typingElement.textContent;
            typingElement.textContent = '';
            
            let i = 0;
            const typingInterval = setInterval(function() {
                if (i < text.length) {
                    typingElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    typingElement.classList.remove('typing-effect');
                }
            }, 100);
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Particles effect
            const particlesContainer = document.getElementById('particles-container');
            const particlesCount = 50;
            
            for (let i = 0; i < particlesCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 5 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                const xPos = Math.random() * 100;
                const yPos = Math.random() * 100;
                particle.style.left = `${xPos}%`;
                particle.style.top = `${yPos}%`;
                
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s infinite ease-in-out`;
                
                const delay = Math.random() * 5;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            const submitButton = document.getElementById('submit-button');
            const successMessage = document.getElementById('success-message');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                submitButton.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';
                submitButton.disabled = true;
                
                setTimeout(function() {
                    contactForm.reset();
                    submitButton.innerHTML = '<i class="ri-check-line mr-2"></i> Sent Successfully';
                    
                    // Show success message
                    successMessage.classList.remove('hidden');
                    successMessage.classList.remove('translate-y-20', 'opacity-0');
                    successMessage.classList.add('translate-y-0', 'opacity-100');
                    
                    setTimeout(function() {
                        submitButton.innerHTML = '<i class="ri-send-plane-fill mr-2"></i> Send Message';
                        submitButton.disabled = false;
                        
                        // Hide success message
                        successMessage.classList.add('translate-y-20', 'opacity-0');
                        setTimeout(function() {
                            successMessage.classList.add('hidden');
                        }, 300);
                    }, 3000);
                }, 1500);
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            const footerThemeToggle = document.getElementById('footer-theme-toggle');
            const html = document.documentElement;
            
            function toggleTheme() {
                if (html.classList.contains('dark')) {
                    html.classList.remove('dark');
                    document.body.style.backgroundColor = '#f8fafc';
                    document.body.style.color = '#1e293b';
                    themeToggle.querySelector('i').classList.remove('ri-moon-line');
                    themeToggle.querySelector('i').classList.add('ri-sun-line');
                    footerThemeToggle.querySelector('i').classList.remove('ri-moon-line');
                    footerThemeToggle.querySelector('i').classList.add('ri-sun-line');
                } else {
                    html.classList.add('dark');
                    document.body.style.backgroundColor = '#0f172a';
                    document.body.style.color = '#e2e8f0';
                    themeToggle.querySelector('i').classList.remove('ri-sun-line');
                    themeToggle.querySelector('i').classList.add('ri-moon-line');
                    footerThemeToggle.querySelector('i').classList.remove('ri-sun-line');
                    footerThemeToggle.querySelector('i').classList.add('ri-moon-line');
                }
            }
            
            themeToggle.addEventListener('click', toggleTheme);
            footerThemeToggle.addEventListener('click', toggleTheme);
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars on scroll
            const progressBars = document.querySelectorAll('.progress-fill');
            const skillSection = document.getElementById('skills');
            
            function animateProgressBars() {
                const skillsSectionTop = skillSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (skillsSectionTop < windowHeight * 0.75) {
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                    
                    window.removeEventListener('scroll', animateProgressBars);
                }
            }
            
            window.addEventListener('scroll', animateProgressBars);
            animateProgressBars(); // Check on initial load
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Add active class to nav links based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            function highlightNavLink() {
                let scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove('text-primary');
                            link.classList.add('text-gray-300');
                            
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.remove('text-gray-300');
                                link.classList.add('text-primary');
                            }
                        });
                    }
                });
            }
            
            window.addEventListener('scroll', highlightNavLink);
            highlightNavLink(); // Check on initial load
        });
 