type IUseLocalStorage<T> = [
    () => T | undefined,
    (data: T) => void,
    () => void
];

export default function useLocalStorage<T>(key: string): IUseLocalStorage<T> {
    const setItem = (value: T): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);

            throw error;
        }
    }

    const getItem = (): T | undefined => {
        try {
            const item = localStorage.getItem(key);

            if (item == null)
                return undefined;

            return JSON.parse(item);
        } catch (error) {
            console.log(error);

            throw error;
        }
    }

    const deleteItem = (): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.log(error);

            throw error;
        }
    }

    return [getItem, setItem, deleteItem];
}