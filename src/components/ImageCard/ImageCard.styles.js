import styled from 'styled-components';

export const ImageCardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 600px;
  width: 1200px;
  align-self: center;
  border-radius: 30px;

  @media (max-width: 1007px) {
    font-size: 12px;
    height: 472px;
    width: 600px;
    padding-top: 20px;
    align-self: center;
  }

  @media (max-width: 640px) {
    height: 432px;
    width: 412px;
    padding-top: 20px;
    font-size: 12px;
    align-self: center;
  }
`;

export const ImageCardPicture = styled.img`
  height: 450px;
  width: 900px;
  border-radius: 40px;

  @media (max-width: 1007px) {
    height: 350px;
    width: 600px;
  }

  @media (max-width: 640px) {
    height: 200px;
    width: 312px;
  }
`;
