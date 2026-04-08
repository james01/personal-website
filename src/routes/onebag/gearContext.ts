import { createContext } from 'svelte';

interface GearContext {
	showRetired: boolean;
}

export const [getGearContext, setGearContext] = createContext<GearContext>();
