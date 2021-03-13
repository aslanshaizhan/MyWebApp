export class Law {
  id: number;
  name: string;
  item: number;

  constructor(id: number,
              name: string,
              item: number) {
    this.id = id;
    this.name = name;
    this.item = item;
  }
}
