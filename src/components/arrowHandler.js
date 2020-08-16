function targetIsInputElement(ev) {
    const target = ev.target || ev.srcElement;

    switch (target.tagName.toUpperCase()) {
        default:
            return false;
        case 'INPUT':
        case 'TEXTAREA':
        case 'SELECT':
            return true;
    }
}

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
            if (targetIsInputElement(ev)) return;

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
