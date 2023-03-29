import { reactive } from 'vue';

export const store = reactive(
    {
        charactersList: [],
        search: '',
        loading: true

    }
);