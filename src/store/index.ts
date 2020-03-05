import {observable} from "mobx";
import foundStore,{FoundStore} from "./found";
import videoStore,{VideoStore} from "./video";


export class Store {
    public foundStore:FoundStore = foundStore;
    public videoStore:VideoStore =  videoStore;
}

export default new Store();