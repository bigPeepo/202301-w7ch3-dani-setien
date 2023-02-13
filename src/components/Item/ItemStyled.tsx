import styled from "styled-components";

const ItemStyled = styled.li`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-between;

  .to-do {
    &__name {
      padding: 2rem;
    }
    &__is-done {
      padding: 2rem;
    }
  }
`;

export default ItemStyled;
