import {State} from './state';
import {Module} from './module';
import {MenuItem} from 'primeng/api';

export class Project {
    id: number;
    name: string;
    type: string;
    url: string;
    image: string;
    description: string;
    state_id: number;
    state = State;
    item: MenuItem[];
    module: Module[];
    // variables
    displaystate = false;
    values: any;
}