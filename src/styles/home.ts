import styled, { css } from 'styled-components';

type CardProps = {
  order: number;
};

export const Container = styled.div`
  min-height: 100vh;

  .black-button {
    border-radius: 14px;

    padding: 14px 24px;

    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 22px;
    color: #fff;

    background-color: #000;
  }

  .outline-button {
    border-radius: 14px;

    padding: 14px 24px;

    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 22px;
    color: #000;

    background-color: #fff;
  }

  .mr-auto {
    margin-right: auto;
  }

  .ml-auto {
    margin-left: auto;
  }

  .b-left {
    border-left: 2px solid ${({ theme }) => theme.colors.text};
  }
  .b-bottom {
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }
  .b-top {
    border-top: 2px solid ${({ theme }) => theme.colors.text};
  }
  .b-right {
    border-right: 2px solid ${({ theme }) => theme.colors.text};
  }

  .border {
    border: 3px solid ${({ theme }) => theme.colors.text};
  }

  header {
    height: 72px;
    width: 100%;

    position: fixed;
    z-index: 9999;

    background-color: ${({ theme }) => theme.colors.background};

    display: flex;

    align-items: center;

    @media (min-width: 1200px) {
      .menu {
        height: 72px;

        ul {
          height: 100%;
        }

        li {
          display: flex;

          align-items: center;

          cursor: pointer;
        }
      }
    }

    @media (max-width: 1200px) {
      aside.mobile-only {
        flex-direction: column;

        .sales-button {
          width: 100%;

          margin: 10px 0;
        }
      }
      /* nav::after {
        content: '222';

        background-color: rgba(0, 0, 0, 0.6);

        height: 100%;

        width: 70%;

        position: absolute;

        right: -70%;

        top: 0;
      } */

      nav {
        position: fixed;
        left: 0;
        top: 0;

        width: 70%;
        height: 100%;

        background-color: ${({ theme }) => theme.colors.background};

        border: 1px solid ${({ theme }) => theme.colors.text};

        border-left: none;
        border-bottom: none;

        z-index: 11;

        transform: translateX(-100%);
        transition: all 0.5s ease;

        padding-top: 40px;

        ul {
          display: flex;
          flex-direction: column;

          gap: 20px;
        }

        .close {
          position: absolute;

          top: 11px;
          right: 10px;
        }
      }

      .menu.toggle {
        transform: translateX(0);
        transition: all 0.5s ease;
      }

      .burguer-menu {
        margin-right: 16px;

        background-color: transparent;

        display: flex;

        align-items: center;

        justify-content: center;

        border-radius: 5px;

        padding: 2px 4px;
      }
    }

    .logo {
      padding: 15px 20px;
    }

    ul {
      display: flex;

      gap: 12px;

      padding-left: 12px;

      font-family: 'Syne', sans-serif;

      li {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.06em;

        color: ${({ theme }) => theme.colors.text};
      }
    }

    aside {
      display: flex;

      align-items: center;

      margin-left: auto;
    }

    .search-button {
      padding: 27px 20px;

      display: flex;

      align-items: center;
      justify-content: center;

      background-color: transparent;

      outline: none;
    }

    .sales-button {
      padding: 27px 20px;

      background-color: transparent;

      display: flex;

      align-items: center;
      justify-content: center;

      gap: 6px;

      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 19px;
      letter-spacing: 0.06em;
    }

    .sign-button {
      padding: 27px 20px;

      background-color: ${({ theme }) => theme.colors.text};

      color: white;

      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 19px;
      letter-spacing: 0.06em;
    }
  }

  main {
    padding-top: 72px;

    .grid {
      display: grid;
      gap: 52px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      width: 100%;
      max-width: 1000px;
      margin: 0 auto;

      margin-top: 70px;

      @media (max-width: 1200px) {
        padding: 16px;
      }

      .illustration-article {
        border: 3px solid #000000;
        box-shadow: 2px 2px 0px #000000, 1px 1px 0px #000000;
        border-radius: 24px;

        min-height: 287px;

        padding: 18px 12px;

        display: flex;
        flex-direction: column;

        background-color: ${({ theme }) => theme.colors.secondary};

        .info {
          height: 100%;

          .title {
            font-family: 'Syne', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 14px;
          }

          .desc {
            font-family: 'Syne', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 17px;
            letter-spacing: -0.005em;
          }
        }

        a {
          font-family: 'Syne', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 17px;

          color: #000;
        }

        img {
          width: 100%;
          border-radius: 12px;
        }
      }
    }

    .articles {
      padding: 70px 0;

      h4 {
        font-family: 'Syne', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 29px;

        text-align: center;

        color: #ffffff;

        text-shadow: 3px 3px 0px #000000, 4px 4px 0px #000000,
          3px 3px 0px #000000, 2px 2px 0px #000000, 1px 1px 0px #000000;

        b {
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: 800 !important;
        }
      }
    }

    .testimonial {
      margin-top: 70px;
      width: 100%;

      @media (max-width: 1200px) {
        .wrapper {
          gap: 0 !important;
        }

        .image {
          flex: 0 !important;
        }
      }

      .wrapper {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;

        display: flex;

        gap: 40px;
      }

      .info {
        display: flex;
        flex-direction: column;
        flex: 2;
        width: 100%;

        justify-content: space-between;

        padding: 50px 12px;

        text-align: left;

        gap: 12px;

        .desc {
          font-family: 'Syne', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.4rem;
          line-height: 150%;
          /* or 36px */

          text-align: justify;
        }

        .person {
          .name {
            font-family: 'Syne', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 2.1rem;
            line-height: 150%;
          }

          .role {
            font-family: 'Syne', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 150%;
          }
        }
      }

      .image {
        flex: 1;

        display: flex;

        align-items: flex-end;

        position: relative;

        .float-image {
          position: absolute;

          top: 50px;
          left: -100px;
        }

        img {
          position: absolute;
        }
      }
    }

    .percentages {
      display: flex;

      gap: 95px;

      width: 100%;
      max-width: 800px;

      margin: 0 auto;

      margin-top: 60px;

      @media (max-width: 1200px) {
        flex-direction: column;

        text-align: center;
      }

      .percentage {
        flex: 1;

        span {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 100%;
        }

        p {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 800;
          font-size: 5.4rem;
          line-height: 100%;

          margin-bottom: 12px;

          color: #ffc700;

          -webkit-text-stroke: 1px #000000;
          /* Shadow */

          text-shadow: 5px 5px 0px #000000, 4px 4px 0px #000000,
            3px 3px 0px #000000, 2px 2px 0px #000000, 1px 1px 0px #000000;
        }
      }
    }

    .buttons {
      width: 100%;
      max-width: 700px;

      margin: 0 auto;

      display: flex;
      gap: 10px;

      justify-content: center;

      margin-top: 60px;

      @media (max-width: 1200px) {
        padding: 16px;
      }
    }

    .banner {
      width: 100%;
      height: 650px;

      display: flex;

      @media (max-width: 1200px) {
        flex-direction: column;

        .left,
        .right {
          max-width: 100% !important;
          padding: 16px;
        }
      }

      .left {
        width: 100%;
        max-width: 50%;

        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.colors.primary};

        .container {
          width: 100%;
          max-width: 600px;

          font-family: 'Syne', sans-serif !important;
          color: #fff !important;
        }

        .buttons {
          display: flex;

          gap: 26px;
        }

        .btn-email {
          border-radius: 14px;

          background-color: ${({ theme }) => theme.colors.text};

          padding: 14px 24px;

          font-weight: 700;
          font-size: 1.8rem;
          font-family: 'Syne', sans-serif !important;
          color: #fff !important;
          line-height: 21.6px;
        }

        .btn-google {
          border-radius: 14px;

          background-color: ${({ theme }) => theme.colors.background};

          padding: 14px 24px;

          font-weight: 700;
          font-size: 1.8rem;
          font-family: 'Syne', sans-serif !important;
          color: ${({ theme }) => theme.colors.text};
          line-height: 21.6px;

          display: flex;

          align-items: center;

          gap: 6px;
        }

        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 3.8rem;
          line-height: 120%;

          margin-bottom: 48px;

          span {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }

        p {
          font-family: 'Syne', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 2.1rem;
          line-height: 150%;
          /* or 32px */

          text-align: justify;

          margin-bottom: 62px;
        }
      }

      .right {
        width: 100%;
        max-width: 50%;

        background-color: ${({ theme }) => theme.colors.secondary};

        display: flex;

        justify-content: center;
        align-items: center;
      }
    }

    .banner2 {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      background-color: #fff;

      padding: 70px 0;

      @media (max-width: 1200px) {
        padding: 240px 0;

        ul {
          flex-direction: column;
        }

        .arc {
          left: 50px !important;
        }
      }

      h2 {
        font-family: 'Syne', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 3.4rem;

        position: relative;

        text-align: center;

        color: #000;

        margin-bottom: 64px;

        p {
          font-weight: 800;
        }
      }

      .arc {
        position: absolute;

        top: -30px;
        left: -35px;
      }
      .line {
        position: absolute;

        bottom: -20px;
        right: 0;
      }

      ul {
        display: flex;
        gap: 82px;
        align-items: center;
      }
    }

    .features {
      width: 100%;

      padding-top: 70px;
      padding-bottom: 50px;

      display: flex;

      flex-direction: column;

      gap: 56px;

      margin-bottom: 35px;

      @media (max-width: 1200px) {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  }

  .promo {
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;

    display: flex;

    align-items: center;
    justify-content: space-around;

    text-align: center;

    .main {
      margin-top: 30px;

      width: 60%;

      @media (max-width: 1200px) {
        width: 100%;
      }
    }

    .title {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.8rem;
      line-height: 150%;

      b {
        font-weight: 800;
      }
    }

    .desc {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 150%;
    }

    .icons {
      display: flex;
      flex-direction: column;
      justify-items: center;

      gap: 26px;
    }
  }

  footer {
    padding: 42px 0;
    background-color: ${({ theme }) => theme.colors.primary};

    .wrapper {
      width: 100%;
      max-width: 1000px;

      margin: 0 auto;

      display: flex;
      gap: 54px;
      justify-content: center;

      .logo {
        margin-bottom: auto;
      }
    }

    @media (max-width: 1200px) {
      .wrapper {
        flex-direction: column !important;

        align-items: center;

        text-align: center;
      }
    }
  }

  .footer {
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.secondary};

    .wrapper {
      width: 100%;
      max-width: 1000px;

      margin: 0 auto;

      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      ul {
        flex-direction: column !important;
      }
    }

    ul {
      display: flex;

      align-items: center;

      button {
        background: #ffffff;
        border: 2px solid #000000;
        box-shadow: 2px 2px 0px #000000, 1px 1px 0px #000000;
        border-radius: 12px;

        padding: 4px 8px;

        display: flex;
        gap: 4px;
        align-items: center;

        font-family: 'Syne', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 14px;
      }
    }

    .text {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 14px;

      gap: 18px !important;
    }

    .icons {
      gap: 12px !important;
    }
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;

  position: relative;

  padding: 7px 0;

  justify-content: center;

  background-color: #fff;

  border: 4px solid #000000;
  /* Shadow */

  box-shadow: 5px 5px 0px #000000, 4px 4px 0px #000000, 3px 3px 0px #000000,
    2px 2px 0px #000000, 1px 1px 0px #000000;
  border-radius: 14px;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 1200px) {
    flex-direction: column;

    .image,
    .info {
      max-width: 100% !important;

      border: none;
    }

    .image {
      ${css`
        ${({ order, theme }: any) =>
          order === 0
            ? `border-bottom: 2px solid ${theme.colors.text}`
            : `border-top: 2px solid ${theme.colors.text}`}
      `};
    }

    .info {
      ${css`
        ${({ order, theme }: any) =>
          order === 1
            ? `border-bottom: 2px solid ${theme.colors.text}`
            : `border-top: 2px solid ${theme.colors.text}`}
      `};
    }
  }

  .image {
    max-width: 50%;
    width: 100%;

    padding: 16px 0;

    overflow: hidden;

    order: ${({ order }) => order};

    img {
      margin-left: ${({ order }) => (order === 0 ? -4 : 42)}px;
    }
  }
  .info {
    max-width: 50%;
    width: 100%;

    padding: 46px 64px;

    .title {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 2.1rem;
      line-height: 150%;
      /* identical to box height, or 32px */

      letter-spacing: 0.015em;
    }

    .desc {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 150%;
      /* or 24px */

      text-align: justify;
      letter-spacing: 0.015em;

      margin-top: 18px;
      margin-bottom: 24px;
    }

    button {
      padding: 14px 24px;

      background-color: transparent;

      display: flex;

      align-items: center;

      gap: 6px;

      border-radius: 14px;

      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 19px;
    }
  }

  .float-image {
    position: absolute;

    ${css`
      ${({ order }: any) => order === 1 && 'bottom: -10px;    left: -80px;'}
      ${({ order }: any) => order === 0 && 'bottom: -10px;    right: -80px;'}
    `}
  }
`;

export const FloatIcon = styled.div`
  padding: 7px;

  width: 80px;
  height: 40px;

  background: #ffffff;
  border: 1.1974px solid #000000;
  border-radius: 16.7636px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  font-family: 'Karla';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 100%;

  &:nth-child(2) {
    margin-left: -50px;
  }
`;

export const Article = styled.div`
  border: 3px solid #000000;
  box-shadow: 2px 2px 0px #000000, 1px 1px 0px #000000;
  border-radius: 24px;

  min-height: 287px;

  padding: 18px 12px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  .info {
    margin-top: 21px;

    height: 100%;

    .title {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 14px;
    }

    .desc {
      font-family: 'Syne', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 17px;
      letter-spacing: -0.005em;
    }
  }

  a {
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 17px;

    color: #000;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: #fff;

  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 17px;

  li {
    &:first-child {
      font-weight: 700;
    }
  }
`;
