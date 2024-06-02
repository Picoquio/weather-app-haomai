import { useEffect, useState } from "react"

interface IFetchError {
    code: number;
    message: string;
}

interface IFetchState {
    data: any;
    isLoading: boolean;
    hasError: boolean;
    error: null | IFetchError
}

export const useFetch = (url: string) => {

    const [state, setState] = useState<IFetchState>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch();
    }, [])


    const getFetch = async () => {
        const resp = await fetch(url);

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });

            return;
        }

        const data = resp.json;
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
