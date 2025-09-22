import styled from "styled-components";
import BestItemList from "./BestItemList";
import ItemList from "./ItemList";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 360px;
  margin-top: 24px;
`;

function ItemContainer() {
  return (
    <Main>
      <BestItemList />
      <ItemList />
    </Main>
  );
}
export default ItemContainer;
