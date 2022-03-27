import React from "react";

export function PortfolioLabel({ width, height, className }) {
  return (
    <svg
      className={className}
      width={width}
      height={(width / 248) * 87}
      viewBox="0 0 248 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.6849 28.5166H40.3969V28.8046L42.5569 31.3006L35.9329 58.0366L32.7649 60.6286V60.9166H46.5889V60.6286L44.8609 58.0366L46.9249 49.7326H48.7969C57.5809 49.7326 63.5809 46.0366 65.2129 39.4126C67.2769 30.9646 62.1409 28.5166 52.6849 28.5166ZM56.2849 39.1726C54.1249 47.8126 51.8209 48.8686 48.3169 48.8686H47.1169L52.0129 29.3806H53.0209C56.9569 29.3806 58.1569 31.8286 56.2849 39.1726ZM72.8539 61.6366C74.3899 61.6366 84.2779 59.6206 86.8219 48.4846C88.5499 40.8526 85.6699 34.6606 78.8059 34.6606C77.2699 34.6606 67.3339 36.6766 64.7419 47.9566C63.0619 55.4446 65.9899 61.6366 72.8539 61.6366ZM77.0299 59.3806C75.0139 60.1486 73.3339 56.8366 72.6619 49.3486C72.0379 41.1406 72.8059 37.5886 74.5339 36.8686C76.5979 36.1966 78.0859 39.4126 78.8539 46.9006C79.3339 55.1566 78.7579 58.6606 77.0299 59.3806ZM112.025 36.7726C111.641 37.3006 111.257 37.5886 110.777 37.5886C109.337 37.5886 107.321 34.9966 106.313 34.9966C104.393 34.9966 102.809 40.4206 97.0013 56.3566H96.4253L100.457 42.2446C100.889 37.6846 99.9773 34.9966 97.6733 34.9966C95.5133 34.9966 93.9293 37.0126 88.4573 43.8286L88.6013 44.1646L93.1613 41.8126L88.2173 60.9166H96.2333C101.657 46.5166 103.241 41.8126 104.105 41.8126C104.921 41.8126 106.313 43.5886 107.369 43.5886C109.193 43.5886 111.977 37.5406 112.217 36.9166L112.025 36.7726ZM126.651 35.3806H122.331L123.963 27.9406H123.771C120.795 30.4366 117.771 32.7886 114.795 35.3806H111.483L111.435 35.6686C112.443 36.2926 113.163 36.9166 113.979 37.4926H114.027L109.515 54.4846C109.083 59.0926 109.995 61.7806 112.299 61.7806C114.459 61.7806 116.043 59.7646 121.515 52.9006L121.371 52.6126L116.715 55.0126H116.667L121.851 37.0126C123.243 37.3006 124.683 37.4446 126.075 37.4446L126.651 35.3806ZM136.71 25.5886C138.87 25.5886 142.758 29.0446 144.006 33.8926H144.438L149.526 27.3166C148.374 25.0606 144.678 23.1886 141.126 23.1886C139.83 23.1886 131.382 23.7166 129.51 34.0366L129.27 35.3806H126.342L126.246 35.6686L128.79 37.2526H128.838L123.75 59.3326C121.638 68.4526 122.07 69.2206 116.022 66.8206L112.566 65.4286L112.278 65.4766L110.694 73.1086C121.158 71.1886 130.086 63.4606 131.814 56.5006L136.662 36.9646C138.918 37.3006 141.51 37.4926 143.91 37.4926L144.438 35.3806H136.758C135.51 33.6046 134.166 30.1966 134.214 28.1806C134.31 26.6446 135.078 25.5886 136.71 25.5886ZM146.588 61.6366C148.124 61.6366 158.012 59.6206 160.556 48.4846C162.284 40.8526 159.404 34.6606 152.54 34.6606C151.004 34.6606 141.068 36.6766 138.476 47.9566C136.796 55.4446 139.724 61.6366 146.588 61.6366ZM150.764 59.3806C148.748 60.1486 147.068 56.8366 146.396 49.3486C145.772 41.1406 146.54 37.5886 148.268 36.8686C150.332 36.1966 151.82 39.4126 152.588 46.9006C153.068 55.1566 152.492 58.6606 150.764 59.3806ZM169.068 54.8206L177.516 23.6686H177.228L166.044 26.9326L165.948 27.2206L168.492 27.8926L161.916 54.3406C161.484 58.9006 162.396 61.6366 164.652 61.6366C166.86 61.6366 168.444 59.6206 173.916 52.7566L173.772 52.4686L169.116 54.8206H169.068ZM185.754 24.9646C183.402 24.9646 181.626 26.5966 181.29 28.8526C180.906 31.2046 182.202 32.7886 184.506 32.7886C186.714 32.7886 188.442 31.2046 188.826 28.8526C189.21 26.5966 187.962 24.9646 185.754 24.9646ZM176.106 39.5086V39.7966L178.698 39.9406L174.954 54.3886C174.522 58.9966 175.434 61.6846 177.69 61.6846C179.898 61.6846 181.482 59.6686 186.954 52.8046L186.81 52.5166L182.154 54.9166L187.53 34.7566H187.242L176.106 39.5086ZM196.838 61.6366C198.374 61.6366 208.262 59.6206 210.806 48.4846C212.534 40.8526 209.654 34.6606 202.79 34.6606C201.254 34.6606 191.318 36.6766 188.726 47.9566C187.046 55.4446 189.974 61.6366 196.838 61.6366ZM201.014 59.3806C198.998 60.1486 197.318 56.8366 196.646 49.3486C196.022 41.1406 196.79 37.5886 198.518 36.8686C200.582 36.1966 202.07 39.4126 202.838 46.9006C203.318 55.1566 202.742 58.6606 201.014 59.3806Z"
        fill="black"
      />
      <path
        d="M243.463 30.5308C243.881 34.4578 241.14 38.6735 235.464 42.9484C229.817 47.2011 221.404 51.4026 210.828 55.3115C189.683 63.1267 160 69.733 126.792 73.2669C93.585 76.8007 63.1756 76.5893 40.8597 73.3991C29.6979 71.8035 20.5897 69.4665 14.1742 66.4975C7.72527 63.513 4.15848 59.9685 3.74058 56.0415C3.32268 52.1146 6.06364 47.8988 11.7401 43.6239C17.387 39.3713 25.7994 35.1698 36.3755 31.2608C57.5202 23.4457 87.2041 16.8393 120.411 13.3055C153.619 9.77162 184.028 9.98301 206.344 13.1732C217.506 14.7688 226.614 17.1058 233.029 20.0748C239.478 23.0593 243.045 26.6039 243.463 30.5308Z"
        stroke="black"
      />
    </svg>
  );
}

export function Arrow({ width, height, className }) {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M9.375 329.4c12.51-12.51 32.76-12.49 45.25 0L128 402.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C-3.125 362.1-3.125 341.9 9.375 329.4z" />
    </svg>
  );
}

export function Spinner({ width, height, className }) {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
    </svg>
  );
}

export function Checkmark({ width, height, className }) {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
    </svg>
  );
}

export function CrossClickable({ width, height, className, clickHandler }) {
  return (
    <svg
      onClick={clickHandler}
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
    </svg>
  );
}
