// Ensure Vue is loaded from the CDN before this script runs
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            theme: 'dark',
            scrolled: false,
            selectedImage: null,
            currentHeroIndex: 0,
            
            // PATH TIP: If images don't show, remove the '../' 
            // and use 'Images/Photo1.jpg' instead.
            images: [
                '../Images/Photo1.jpg', '../Images/Photo2.jpg', '../Images/Photo3.jpg',
                '../Images/Photo4.jpg', '../Images/Photo5.jpg', '../Images/Photo6.jpg',
                '../Images/Photo7.jpg', '../Images/Photo9.jpg', '../Images/Photo10.jpg',
                '../Images/Photo11.jpg', '../Images/Photo12.jpg', '../Images/Photo13.jpg'
            ],
            heroImages: [
                '../Images/Photo1.jpg', '../Images/Photo2.jpg', '../Images/Photo3.jpg',
                '../Images/Photo4.jpg', '../Images/Photo5.jpg', '../Images/Photo13.jpg'
            ],
            sectionImages: {
                about: '../Images/about.jpg.jpg', // Check if .jpg.jpg is intended
                education: '../Images/education.jpeg',
                hobbies: '../Images/hobbies.jpg.jpg',
                goals: '../Images/goals.jpg.jpg',
                experience: '../Images/experience.jpg.jpg'
            },
            skills: {
                languages: [
                    { name: 'Python', icon: '../Images/python.png' },
                    { name: 'Java', icon: '../Images/java.png' },
                    { name: 'HTML', icon: '../Images/html.png' },
                    { name: 'CSS', icon: '../Images/css.png' },
                    { name: 'JavaScript', icon: '../Images/javascript.png' }
                ],
                frameworks: [
                    { name: 'React', icon: '../Images/react.png' },
                    { name: 'Bootstrap', icon: '../Images/bootstrap.png' }
                ],
                databases: [
                    { name: 'MySQL', icon: '../Images/mysql.png' }
                ],
                tools: [
                    { name: 'TinkerCAD', icon: '../Images/tinkercad.png' },
                    { name: 'Packet Tracer', icon: '../Images/packettracer.webp' },
                    { name: 'Kali Linux', icon: '../Images/kali_linux.png' }
                ]
            }
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            document.body.className = this.theme;
        },
        openImage(img) {
            this.selectedImage = img;
        },
        closeImage() {
            this.selectedImage = null;
        },
        nextHeroSlide() {
            this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
        }
    },
    mounted() {
        // Slideshow interval
        setInterval(() => {
            this.nextHeroSlide();
        }, 5000);
        
        // Scroll listener for Navbar
        window.addEventListener('scroll', () => {
            this.scrolled = window.scrollY > 80;
        });

        // Intersection Observer for animations
        const sections = document.querySelectorAll('.row');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));
    }
});

// Mount the app
app.mount('#app');