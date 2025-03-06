import { create } from "zustand";

interface Package {
    length: number;
    width: number;
    height: number;
    weight: string;
    content: string;
}

interface OrderState {
    step: number;
    orderData: {
        name: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        packages: Package[];
    };
    setOrderData: (data: Partial<OrderState["orderData"]>) => void;
    addPackage: (pkg: Package) => void;
    removePackage: (index: number) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
    step: 1,
    orderData: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        packages: [],
    },
    setOrderData: (data) => set((state) => ({ orderData: { ...state.orderData, ...data } })),
    addPackage: (pkg) => set((state) => ({ orderData: { ...state.orderData, packages: [...state.orderData.packages, pkg] } })),
    removePackage: (index) => set((state) => ({
        orderData: {
            ...state.orderData,
            packages: state.orderData.packages.filter((_, i) => i !== index),
        },
    })),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
}));