import { useEffect, useState } from 'react'

function useFetch(url: string) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (url === "") {
      return;
    }
    fetch(url)
        .then((res: Response) => res.json())
        .then((json: any[]) => {
            const array: any[] = [];
            for (const key in json) {
              array.push(json[key]);
            }
            setItems(array);
            setLoading(false);
        });
}, [url]);
  

  return {items, loading};
}

export default useFetch