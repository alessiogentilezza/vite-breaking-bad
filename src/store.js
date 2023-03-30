import { reactive } from 'vue';

export const store = reactive(
    {
        charactersList: [],
        select: null,
        loading: true

    }
);