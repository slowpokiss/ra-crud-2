import { useEffect, useState } from "react";

export default function useJsonFetch(url: string, options?: RequestInit): any {
  const [state, setState] = useState({ loading: true, data: null, err: null });

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setState({ loading: false, data, err: null });
      })
      .catch((err) => setState({ loading: false, data: null, err }));

    return () => {
      setState({ loading: true, data: null, err: null });
    };
  }, [url, options]);

  return [JSON.stringify(state.data), String(state.loading), String(state.err)];
}
