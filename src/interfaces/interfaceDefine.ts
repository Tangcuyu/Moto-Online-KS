
export interface ISubmenuItem {
    subItemName: string;
    subItemString: string;
}

export interface Imenuitem {
    buttonName: string;
    iconString: string;
    subItems: ISubmenuItem[];
}


export interface IMenuitemList {
    menuItems: Imenuitem[];
    err?: any;
}

export class MenuitemList implements IMenuitemList {
    menuItems: [
        {
            buttonName: '',
            iconString: '',
            subItems: [
                {
                    subItemName: '',
                    subItemString: ''
                }
            ]
        }
    ];
    err: {};
}