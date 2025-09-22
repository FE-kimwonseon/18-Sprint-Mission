import { useEffect, useState } from "react";
import { getProducts } from "../../api/getProduct";

export function useProducts({ page = 1, pageSize = 10, orderBy = "recent", keyword = "" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts({ page, pageSize, orderBy, keyword });
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { products, loading, error };
}
