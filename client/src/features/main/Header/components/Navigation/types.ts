export type StyledNavProps = {
  $headerHeight: string;
  $isNavOpen: boolean;
};

export type NavigationProps = StyledNavProps & {
  closeNav: () => void;
};
