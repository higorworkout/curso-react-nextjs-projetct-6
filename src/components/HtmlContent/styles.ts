import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a,
    a:visited
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a: hover {
      filter: brightness(80%);
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    img {
      max-width: 100%;
    }

    .image {
      background-color: ${theme.colors.mediumGray};
      line-height: 0;
    }
    .image figcaption{
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.medium};
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray}
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;

      table {
        width: 100%;
        border-collapse: collapse
      }

      table td, table th {
          padding: ${theme.spacings.small};
          border: 0.1rem solid ${theme.colors.mediumGray}
      }
    }

    @media ${theme.media.lteMedium} {
      font-size: 1.8rem;

      .image-style-side {
      max-width: 100%;
      float: none;
      margin: 0;
    }
    }


  `}
`;
