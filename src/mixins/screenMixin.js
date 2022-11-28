export const screenMixin = {
    mounted() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    computed: {
        es() {
            return this.windowWidth <= 576;
        },
        sm() {
            return this.windowWidth >= 576;
        },
        md(){
            return this.windowWidth >= 768;
        },
        lg(){
            return this.windowWidth >= 992;
        },
        xl(){
            return this.windowWidth >= 1200;
        },
        xxl(){
            return this.windowWidth >= 1400;
        },
    },
};
