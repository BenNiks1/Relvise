import * as React from "react";

const MenuSvg = (props) => {
  return (
    <svg
      width={24}
      height={14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.572 0H23.43v2.286H.572V0zm5.715 5.714h17.142V8H6.287V5.714zm7.142 5.715h10v2.285h-10V11.43z"
        fill="#fff"
      />
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v13.714H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SearchSvg = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.46 12.319l4.304 4.303a.807.807 0 01-1.142 1.141L10.32 13.46a6.4 6.4 0 111.14-1.14h.001zm-5.06.88a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6z"
        fill="#fff"
      />
    </svg>
  );
};

const ShopSvg = (props) => {
  return (
    <svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <g clipPath="url(#prefix__clip1)" fill="#fff">
          <path d="M5.332 14.934a1.067 1.067 0 100-2.134 1.067 1.067 0 000 2.134zM12.801 14.934a1.067 1.067 0 100-2.134 1.067 1.067 0 000 2.134zM14.933 2.667H3.104L2.667.427A.533.533 0 002.133 0H0v1.067h1.696l2.037 10.24a.533.533 0 00.534.426h9.6v-1.066H4.704l-.437-2.134h9.6a.533.533 0 00.533-.416l1.067-4.8a.535.535 0 00-.534-.65zm-1.493 4.8H4.064l-.747-3.734h10.95l-.827 3.734z" />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h16v14.933H0z" />
        </clipPath>
        <clipPath id="prefix__clip1">
          <path fill="#fff" d="M0 0h16v14.933H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { ShopSvg, SearchSvg, MenuSvg };
