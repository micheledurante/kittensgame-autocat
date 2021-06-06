// mixin.IChildrenAware
export interface IChildrenAware {
  children?: Array<unknown>;

  addChild(child: unknown): void;
  render(container: unknown): void;
  update(): void;
}
