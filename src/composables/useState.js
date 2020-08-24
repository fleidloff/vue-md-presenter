import { ref } from 'vue';

export default function useState(initialValue = null) {
    const state = ref(initialValue);

    function update(newValue) {
        if (typeof newValue === 'function') {
            state.value = newValue(state.value);
        } else {
            state.value = newValue;
        }
    }

    return [state, update];
}
