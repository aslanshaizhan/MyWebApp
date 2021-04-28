export class Article{
  id: string;
  name: string;
  issuedBy: string;
  issuedDate: string;

  constructor(id: string, name: string, issuedBy: string, issuedDate: string) {
    this.id = id;
    this.name = name;
    this.issuedBy = issuedBy;
    this.issuedDate = issuedDate;
  }
}
