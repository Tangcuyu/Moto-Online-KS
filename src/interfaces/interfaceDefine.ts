// This is the Menu items interfaces


export interface ISubmenuItem {
    subItemName: string;
    subItemString: string;
}

export interface Imenuitem {
    buttonName: string;
    iconString: string;
    subItems: ISubmenuItem[];
}

export class Menuitem implements Imenuitem {
    buttonName: '';
    iconString: '';
    subItems: [
        {
            subItemName: '';
            subItemString: '';
        }
    ];
}