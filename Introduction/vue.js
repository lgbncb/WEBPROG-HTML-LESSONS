const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            theme: 'dark',
            scrolled: false,
            selectedImage: null,
            currentHeroIndex: 0,
            images: [
                '../Images/Photo1.jpg', '../Images/Photo2.jpg', '../Images/Photo3.jpg',
                '../Images/Photo4.jpg', '../Images/Photo5.jpg', '../Images/Photo6.jpg',
                '../Images/Photo7.jpg', '../Images/Photo9.jpg', '../Images/Photo10.jpg',
                '../Images/Photo11.jpg', '../Images/Photo12.jpg', '../Images/Photo13.jpg'
            ],
            heroImages: [
                '../Images/Photo1.jpg', '../Images/Photo2.jpg', '../Images/Photo3.jpg',
                '../Images/Photo4.jpg', '../Images/Photo5.jpg', '../Images/Photo13.jpg'
            ]
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            // FIX 3: Robust theme switching
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
        // Initialize theme on load
        document.body.className = this.theme;

        setInterval(() => {
            this.nextHeroSlide();
        }, 5000);
        
        window.addEventListener('scroll', () => {
            this.scrolled = window.scrollY > 80;
        });

        const sections = document.querySelectorAll('.row');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }
});

app.mount('#app');