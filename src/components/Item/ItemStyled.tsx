import styled from "styled-components";

const ItemStyled = styled.li`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 3rem;

  .to-do {
    &__name {
      width: 80vw;
      text-align: left;
      padding-left: 2rem;
    }
    &__is-done {
      padding: 2rem;
      padding-right: 3rem;
    }
  }
`;

export default ItemStyled;
