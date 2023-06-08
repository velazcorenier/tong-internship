const useAlechemyApi = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const alchemyApi = async (url: string) => {
        try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        } catch (error) {
        setError(error);
        } finally {
        setLoading(false);
        }
    };
    
    return { data, error, loading, alchemyApi };

}