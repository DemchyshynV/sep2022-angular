export interface IPagination<D> {
  total_items: number;
  total_pages: number;
  prev: string;
  next: string;
  items: D[];
}
