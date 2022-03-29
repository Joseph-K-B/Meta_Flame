import create from 'zustand'

const useStore = create((set) => ({
    page: 0,
    setPage: (page) => set({page}),
    forward: false,
    setForward: (forward) => set({forward}),
}));

export {useStore}