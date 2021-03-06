/* 类别：用于把产品和分类关联起来。当一个产品被删除的时候，对应的分类(Taxon)也会被自动删除 */

import { Taxon } from './Taxon';

export class Classification {
  taxonId: number;
  position: number;
  taxon: Taxon;
}
