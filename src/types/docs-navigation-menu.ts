export type DocsNavigationNavigationItem = {
  label: string;
  to: string;
};

export type DocsNavigationAccordion = {
  label: string;
  href: string;
  defaultOpen?: boolean;
  items?: DocsNavigationNavigationItem[];
};

export type DocsNavigationMenu = {
  label: string;
  href: string;
  items?: DocsNavigationAccordion[];
}[];
