import {State} from './state';

export class Module {
    id: number;
    name: string;
    state_id: number;
    project_id: number;
    state: State;

    getJson() {
        delete this.state;
        return this;
    }
}
