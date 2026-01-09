const app = Vue.createApp({
    data() {
        return {
            theme: 'dark',
            scrolled: false,
            selectedImage: null,
            currentHeroIndex: 0,
            // Gallery images
            images: [
                '../Images/Photo1.jpg',
                '../Images/Photo2.jpg',
                '../Images/Photo3.jpg',
                '../Images/Photo4.jpg',
                '../Images/Photo5.jpg',
                '../Images/Photo6.jpg',
                '../Images/Photo7.jpg',
                '../Images/Photo9.jpg',
                '../Images/Photo10.jpg',
                '../Images/Photo11.jpg',
                '../Images/Photo12.jpg',
                '../Images/Photo13.jpg'
            ],
            // Hero slideshow images
            heroImages: [
                '../Images/Photo1.jpg',
                '../Images/Photo2.jpg',
                '../Images/Photo3.jpg',
                '../Images/Photo4.jpg',
                '../Images/Photo5.jpg',
                '../Images/Photo13.jpg'
            ],
            // Section images - organized by section
            sectionImages: {
                about: '../Images/about.jpg.jpg',
                education: '../Images/education.jpeg',
                hobbies: '../Images/hobbies.jpg.jpg',
                goals: '../Images/goals.jpg.jpg',
                experience: '../Images/experience.jpg.jpg'
            },
            // All images catalog for reference
            allImages: {
                photos: [
                    { id: 1, src: '../Images/Photo1.jpg', alt: 'Gallery Photo 1', category: 'gallery' },
                    { id: 2, src: '../Images/Photo2.jpg', alt: 'Gallery Photo 2', category: 'gallery' },
                    { id: 3, src: '../Images/Photo3.jpg', alt: 'Gallery Photo 3', category: 'gallery' },
                    { id: 4, src: '../Images/Photo4.jpg', alt: 'Gallery Photo 4', category: 'gallery' },
                    { id: 5, src: '../Images/Photo5.jpg', alt: 'Gallery Photo 5', category: 'gallery' },
                    { id: 6, src: '../Images/Photo6.jpg', alt: 'Gallery Photo 6', category: 'gallery' },
                    { id: 7, src: '../Images/Photo7.jpg', alt: 'Gallery Photo 7', category: 'gallery' },
                    { id: 9, src: '../Images/Photo9.jpg', alt: 'Gallery Photo 9', category: 'gallery' },
                    { id: 10, src: '../Images/Photo10.jpg', alt: 'Gallery Photo 10', category: 'gallery' },
                    { id: 11, src: '../Images/Photo11.jpg', alt: 'Gallery Photo 11', category: 'gallery' },
                    { id: 12, src: '../Images/Photo12.jpg', alt: 'Gallery Photo 12', category: 'gallery' },
                    { id: 13, src: '../Images/Photo13.jpg', alt: 'Gallery Photo 13', category: 'gallery' }
                ],
                sections: [
                    { id: 'about', src: '../Images/about.jpg.jpg', alt: 'Profile Picture', section: 'About Me' },
                    { id: 'education', src: '../Images/education.jpeg', alt: 'Asia Pacific College', section: 'Education' },
                    { id: 'hobbies', src: '../Images/hobbies.jpg.jpg', alt: 'My Hobbies', section: 'Hobbies' },
                    { id: 'goals', src: '../Images/goals.jpg.jpg', alt: 'My 2026 Goals', section: 'Goals' },
                    { id: 'experience', src: '../Images/experience.jpg.jpg', alt: 'Technical Skills', section: 'IT Experience' }
                ]
            },
            // Skills data
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
        // Hero slideshow With 5 Seconds Interval
        setInterval(() => {
            this.nextHeroSlide();
        }, 5000);
        
        window.addEventListener('scroll', () => {
            this.scrolled = window.scrollY > 80;
            const header = document.querySelector('.navbar');
            if (header) {
                if (this.scrolled) {
                    header.classList.add('nav-solid');
                } else {
                    header.classList.remove('nav-solid');
                }
            }
        });

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

app.mount('#app');
