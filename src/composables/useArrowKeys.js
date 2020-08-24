import { onMounted, onBeforeUnmount } from 'vue';

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

export default function useArrowKeys({ update }) {
    function onKeyPress(ev) {
        if (targetIsInputElement(ev)) return;

        switch (ev.key) {
            default:
                break;
            case 'ArrowLeft':
                update(-1);
                break;
            case 'ArrowRight':
                update(1);
                break;
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', onKeyPress);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeyPress);
    });
}
