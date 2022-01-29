import styled from 'styled-components';

export const ImageCardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 1200px;
  align-self: center;
  border-radius: 30px;

  p {
    padding: 20px;
    font-size: 20px;
  }

  @media (max-width: 1007px) {
    font-size: 12px;
    height: 1072px;
    width: 600px;
    padding-top: 20px;
    align-self: center;
  }

  @media (max-width: 640px) {
    height: 432px;
    width: 412px;
    padding-top: 20px;
    font-size: 8px;
    align-self: center;
    p {
      font-size: 14px;
    }
  }
`;

export const ImageCardPicture = styled.img`
  height: 400px;
  width: 600px;
  border-radius: 10px;

  @media (max-width: 1007px) {
    height: 350px;
    width: 600px;
  }

  @media (max-width: 640px) {
    height: 200px;
    width: 312px;
  }
`;

export const ImageCardVideo = styled.iframe`
  height: 450px;
  width: 700px;
  border-radius: 5px;
  border: none;
  padding-bottom: 40px;

  @media (max-width: 1007px) {
    height: 350px;
    width: 500px;
  }

  @media (max-width: 640px) {
    height: 200px;
    width: 312px;
  }
`;
