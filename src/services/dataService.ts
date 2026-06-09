import Papa from 'papaparse';
import type { GuestType } from '@/types/guestType';

export class DataService {
    public async getData (): Promise<GuestType[]> {
        try {
            const response = await fetch(import.meta.env.VITE_API);
            const csvText = await response.text();
            
            const parsed = Papa.parse<GuestType>(csvText, {
                header: true,
                skipEmptyLines: true,
                transform: (value, column) => {
                    if (column != "Nome") {
                        return parseInt(value);
                    }
                    return value;
                }
            });
            return parsed.data;
        } catch (error: any) {
            console.error("Erro ao carregar os dados: ", error);
            throw error;
        }
    }
}