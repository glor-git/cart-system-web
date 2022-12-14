import create from 'zustand'

interface dataInfo {
  products: object[];
  setProducts: (select: object[]) => void;
  removeProducts: () => void;
  carts: object[];
  setCarts: (select: object) => void;
  removeCarts: () => void;
}

const useStore = create<dataInfo>(set => ({
  products: [],
  setProducts: (select) => {
    set((state) => ({ products: select }));
  },
  removeProducts: () => {
    set((state) => ({ products: [] }));
  },
  carts: [],
  setCarts: (select) => {
    set(state => {
      // state.carts.forEach(data => {
      //   console.log(data)
      // })
      return { carts: [...state.carts, select] }
    })
  },
  removeCarts: () => {
    set((state) => ({ carts: [] }));
  },
}))

export default useStore