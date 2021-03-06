/* 选项类型(OptionType)表示一个商品的不同选项，比如说尺寸。
 * 相应的选项值(OpitonValue)可能是：“小号”、“中号”、“大号”。
 * 常见的还有颜色，比如：“红色”、“绿色”、“蓝色”
*/
export class OptionValue {
    id: string;
    name: string;
    presentation: string;
    optionTypeName: string;
    optionTypeId: number;
    optionTypePresentation: string;
    optionType: any;
    value: any;
}
