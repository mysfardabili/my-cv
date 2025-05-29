        document.addEventListener('DOMContentLoaded', function() {
            
            if (window.Typed) {
                new Typed("#typing-name", {
                    strings: ["M. Yusuf Ardabili"],
                    typeSpeed: 60,
                    backSpeed: 30,
                    showCursor: true,
                    cursorChar: '|',
                    loop: false
                });
            
            } else {
                document.getElementById("typing-name").textContent = "M. Yusuf Ardabili";
            } 
            // Typing effect untuk elemen dengan id="typing"
            const typingTexts = ["Front End Developer", "AI Tools Explorer", "Tech Problem Solver"];
            let count = 0;
            let index = 0;
            let currentText = "";
            let letter = "";
            (function type() {
                if (count === typingTexts.length) count = 0;
                currentText = typingTexts[count];
                letter = currentText.slice(0, ++index);
                const typingEl = document.getElementById("typing");
                if (typingEl) typingEl.textContent = letter;
                if (letter.length === currentText.length) {
                    setTimeout(() => {
                        index = 0;
                        count++;
                        setTimeout(type, 500);
                    }, 1500);
                } else {
                    setTimeout(type, 100);
                }
            })();
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    if (icon.classList.contains('ri-menu-line')) {
                        icon.classList.remove('ri-menu-line');
                        icon.classList.add('ri-close-line');
                    } else {
                        icon.classList.remove('ri-close-line');
                        icon.classList.add('ri-menu-line');
                    }
                });
                // Close mobile menu when clicking on a link
                const mobileMenuLinks = mobileMenu.querySelectorAll('a');
                mobileMenuLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.add('hidden');
                        const icon = mobileMenuButton.querySelector('i');
                        icon.classList.remove('ri-close-line');
                        icon.classList.add('ri-menu-line');
                    });
                });
            }        // Smooth scrolling for anchor links
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

            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            const submitButton = document.getElementById('submit-button');
            const successMessage = document.getElementById('success-message');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                submitButton.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';
                submitButton.disabled = true;
                setTimeout(function() {
                    contactForm.reset();
                    submitButton.innerHTML = '<i class="ri-check-line mr-2"></i> Sent Successfully';
                    successMessage.classList.remove('hidden');
                    successMessage.classList.remove('translate-y-20', 'opacity-0');
                    successMessage.classList.add('translate-y-0', 'opacity-100');
                    setTimeout(function() {
                        submitButton.innerHTML = '<i class="ri-send-plane-fill mr-2"></i> Send Message';
                        submitButton.disabled = false;
                        successMessage.classList.add('translate-y-20', 'opacity-0');
                        setTimeout(function() {
                            successMessage.classList.add('hidden');
                        }, 300);
                    }, 3000);
                }, 1500);
            });

            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            const html = document.documentElement;
            const icon = themeToggle?.querySelector('i');

            function setThemeIcon(isDark) {
                if (!icon) return;
                icon.classList.toggle('ri-moon-line', !isDark);
                icon.classList.toggle('ri-sun-line', isDark);
            }

            const userPrefersDark = localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (userPrefersDark) {
                html.classList.add('dark');
                setThemeIcon(true);
            } else {
                html.classList.remove('dark');
                setThemeIcon(false);
            }

            themeToggle?.addEventListener('click', () => {
                const isDark = html.classList.toggle('dark');
                setThemeIcon(isDark);
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
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
            animateProgressBars();

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
            highlightNavLink();
        });
