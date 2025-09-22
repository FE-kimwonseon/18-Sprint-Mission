import styled from "styled-components";
import BestItem from "./BestItem";
import { useProducts } from "../hook/useProducts";

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;
`;

const CardList = styled.div`
  display: flex;
  gap: 24px;
`;

function BestItemList() {
  // 베스트 아이템 상품 목록
  const { products, loading, error } = useProducts({
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
  });

  return (
    <section>
      <Title>베스트 상품</Title>
      {loading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}
      <CardList>
        {products.map((product) => (
          <BestItem key={product.id} product={product} />
        ))}
      </CardList>
    </section>
  );
}

export default BestItemList;
