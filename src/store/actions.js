import types from './types';

const loading = () => ({
    type: types.LOADING,
});

const open = () => ({
    type: types.OPEN,
});

const date = addDate => ({
    type: types.DATE,
    addDate,
});

const actions = {
    loading,
    open,
    date,
};

export default actions;