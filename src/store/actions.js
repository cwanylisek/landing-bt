import types from './types';

const loading = () => ({
    type: types.LOADING
});

const open = () => ({
    type: types.OPEN
})

export default {
    loading,
    open
}