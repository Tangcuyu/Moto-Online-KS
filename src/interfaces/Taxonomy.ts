/**
 * 分类列表：由分类节点组成的列表。每个分类列表都有一个根节点(Taxon)
 */

import { Taxon } from './Taxon';

export interface Taxonomy {
  id: number;
  name: string;
  root: Taxon;
}
