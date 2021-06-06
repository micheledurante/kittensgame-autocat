// com.nuclearunicorn.game.ui.ContentRowRenderer
export interface IContentRowRenderer {
  twoRows: boolean;
  leftRow?: boolean;
  rightRow?: boolean;
  content: unknown;

  initRenderer(content: unknown): void;

  /**
   * Get a DOM Node container for an array element with a given index, starting with 0
   * @param id
   */
  getElementContainer(id: number): unknown;
}
