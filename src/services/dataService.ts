import Papa from 'papaparse';

export class DataService {
    public async getData (): Promise<any> {
        try {
            const response = await fetch(import.meta.env.VITE_API);
            const csvText = await response.text();
            
            const parsed = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true
            });

            console.log(parsed.data);
            return parsed.data;
        } catch (error: any) {
            console.error("Erro ao carregar os dados:", error);
            throw error;
        }
    }
}