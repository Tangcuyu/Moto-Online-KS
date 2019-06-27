/* 选项类型(OptionType)表示一个商品的不同选项，比如说尺寸。
 * 相应的选项值(OpitonValue)可能是：“小号”、“中号”、“大号”。
 * 常见的还有颜色，比如：“红色”、“绿色”、“蓝色”
 * 一个产品可以有很多选项类型，但是要使一个产品成为商品至少需要分配一个选项类型
*/

export class OptionType {
    id: string;
    name: string;
    presentation: string;
    position: string;
}
