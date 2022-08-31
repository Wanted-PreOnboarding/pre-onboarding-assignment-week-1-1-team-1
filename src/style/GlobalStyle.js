import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
	}

	body{
		background-color: #e9ece9;
		font-family: 'Roboto', sans-serif;
	}

`;

export const PageBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

export const HeadBlock = styled.div`
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    color: #343a40;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    color: #343a40;
  }

  .total {
    margin-top: 20px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }
`;
