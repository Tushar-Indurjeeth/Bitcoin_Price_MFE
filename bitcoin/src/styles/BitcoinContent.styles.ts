import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: #111;
  background-color: #f0f0f1;

  h2 {
    font-size: 3rem;
  }

  select {
    font-size: 1.2rem;
  }

  .priceDisplay {
    color: #fff;
    font-size: 3rem;
    background-color: rgb(27, 73, 88);
    padding: 20px 40px;
    border-radius: 40px;
    margin-top: 40px;
  }

  .selectCurrency {
    color: black !important;

    :before {
      border-color: black !important;
    }
    :after {
      border-color: whitesmoke !important;
    }

    .MuiSvgIcon-root {
      fill: black !important;
    }

    .currency__menu {
      color: black !important;
    }
  }

  .logout {
    margin-top: 10px;

    .MuiSvgIcon-root {
      cursor: pointer;
    }
  }
`;
