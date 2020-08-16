export default {
    render() {
        return [];
    },
    props: { update: Function },
    mounted() {
        window.addEventListener('keydown', this.onKeyPress);
    },
    unmounted() {
        window.removeEventListener('keydown', this.onKeyPress);
    },
    methods: {
        onKeyPress(ev) {
            switch (ev.key) {
                default:
                    break;
                case 'ArrowLeft':
                    this.update(-1);
                    break;
                case 'ArrowRight':
                    this.update(1);
                    break;
            }
        },
    },
};
