import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

type Whoami = {};

export interface AuthStore {
  user: Whoami | null;
  setUser(user: Whoami): void;
  nullify(): void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser(user) {
        set({user});
      },
      nullify() {
        set({user: null});
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
