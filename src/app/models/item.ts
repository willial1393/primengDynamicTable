export class Item {
    id: number;
    label: string;
    icon: string;
    url: string;
    project_id: number;

    getJson() {
        return this;
    }
}
