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
      padding-left: 3rem;
    }
    &__is-done,
    &__delete {
      padding-right: 3rem;
      font-size: 32px;
    }
  }
`;

export default ItemStyled;
