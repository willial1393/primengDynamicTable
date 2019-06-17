export class User {
    id: number;
    name: string;
    username: number;
    password: number;

    getJson() {
        return this;
    }

    getJsonLogin() {
        delete this.id;
        delete this.name;
        return this;
    }
}
