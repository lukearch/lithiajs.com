export type DocsNavigationNavigationItem = {
  label: string;
  to: string;
};

export type DocsNavigationAccordion = {
  label: string;
  icon: string;
  href: string;
  defaultOpen?: boolean;
  items?: DocsNavigationNavigationItem[];
};

export type DocsNavigationMenu = {
  label: string;
  href: string;
  items?: DocsNavigationAccordion[];
}[];
