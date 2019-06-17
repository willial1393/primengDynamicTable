import {Icon} from './icon';

export class Item {
    id: number;
    label: string;
    icon_id: number;
    url: string;
    project_id: number;
    icon: Icon;

    getJson() {
        delete this.icon;
        return this;
    }
}
