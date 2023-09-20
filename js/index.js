Vue.createApp({
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize)
    }
}).mount('#app')