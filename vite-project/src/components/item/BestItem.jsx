import styled from "styled-components";
import IcHeart from "../../assets/icon/ic_heart.svg";

const ItemCard = styled.div`
  width: 282px;
  height: 378px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  line-height: 24px;
`;

const LikeField = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #4b5563;
`;

function BestItem({ product }) {
  // 이미지 배열에서 첫 번째 이미지 가져오기, 없으면 기본 이미지
  const getProductImage = () => {
    if (product.images && product.images.length > 0) {
      return product.images[0]; // 첫 번째 이미지
    }
    return "https://via.placeholder.com/282x282?text=No+Image";
  };

  return (
    <ItemCard>
      <Item>
        <Image src={getProductImage()} alt={product.name || "상품 이미지"} />
      </Item>
      <InfoField>
        <p>{product.name}</p>
        <p>{product.price}원</p>
        <LikeField>
          <img src={IcHeart} alt="" />
          <p>{product.favoriteCount}</p>
        </LikeField>
      </InfoField>
    </ItemCard>
  );
}

export default BestItem;
