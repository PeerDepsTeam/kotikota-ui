import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {User} from "@/services/api/gen";

export interface AuthStore {
  user: User | null;
  setUser(user: User): void;
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
