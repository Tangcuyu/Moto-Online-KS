/* 分类单元
 * permalink： The end of the URL a user goes to, in order to see all products associated with this taxon. This field is also required, and a value is automatically generated for you when you create the taxon. Be careful with arbitrarily changing the permalink - if you have two taxons with the same permalink you will run into issues.
*/

export class Taxon {
  id: number;
  name: string;
  prettyName: string;
  permaLink: string;
  parentId: number;
  taxonomyId: number;
  checked: boolean = false;
  taxons: Taxon[];
  icon: string;
  imageUrl: string;
}
