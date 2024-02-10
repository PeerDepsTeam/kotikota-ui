import {useCallback, useEffect, useState} from "react";
import {useLoading} from "@/hooks/use_loading.ts";

export const useFetch = <T>(
  fetch: () => Promise<T>,
  defaultValue?: T | undefined
) => {
  const [data, setData] = useState(defaultValue);
  const {queue, isLoading} = useLoading("fetch_data");
  const [error, setError] = useState<any>();

  const fetchData = useCallback(async () => {
    try {
      const data = await queue(fetch);
      setData(data);
    } catch (e) {
      setError(e);
    }
  }, [queue]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return {
    isLoading,
    error,
    data,
    refetch: fetchData,
  };
};
