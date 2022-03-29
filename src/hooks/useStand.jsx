import create from 'zustand'

const useStore = create((set) => ({
    page: 0,
    setPage: (page) => set({page}),
    home: false,
    setHome: (home) => set({home}),
    animationOne: false,
    setAnimationOne: (animationOne) => set({animationOne}),
}));

export {useStore}