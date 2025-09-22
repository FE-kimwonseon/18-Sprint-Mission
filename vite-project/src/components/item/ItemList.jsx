import styled from "styled-components";
import AllItemTitle from "./AllItemTitle";

const ListSection = styled.section`
  margin: 40px 0 24px 0;
  display: flex;
  flex-direction: column;
`;

function ItemList() {
  return (
    <ListSection>
      <AllItemTitle />
    </ListSection>
  );
}

export default ItemList;
