import create from 'zustand'

interface dataInfo {
  products: object[];
  setProducts: (select: object[]) => void;
  removeProducts: () => void;
}

const useStore = create<dataInfo>(set => ({
  products: [],
  setProducts: (select) => {
    set((state) => ({ ...state, products: select }));
  },
  removeProducts: () => {
    set((state) => ({ ...state, products: [] }));
  }
}))

export default useStore