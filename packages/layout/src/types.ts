export type LinkItem = {
  name: string;
  path: string;
  component: React.ComponentType<Record<string, unknown>>;
};

export type LinkItemWithoutComp = Omit<LinkItem, "component">;
