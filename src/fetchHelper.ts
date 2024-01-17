export async function fetchHelper<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json() as T;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : String(error)}`);
    }
}
