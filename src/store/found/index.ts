import {observable,action,runInAction} from "mobx";
import Api from "../../ajax/api";
import ajax from "../../ajax";

class FoundStore{
    @observable 
    public banner:Array<any> = [];
    @observable
    public songList:Array<any> = [];

    @action.bound
    public getBanner(){

        runInAction(async ()=>{
            try {
                let res = await ajax.get(
                    Api.FOUND_BANNER,{
                        params:{
                            type:'2'
                        }
                    }
                )
                this.banner = res.data.banners

            } catch (error) {
                console.log(error);
            }
        });
    }
    @action.bound
    public getSongList(){

        runInAction(async ()=>{
            try {
                let res = await ajax.get(
                    Api.SUGGEST_LIST,{
                        params:{
                            limit:6
                        }
                    }
                )
                console.log(res.data);
                this.songList = res.data.result;
                

            } catch (error) {
                console.log(error);
            }
        });
    }
}

export default new FoundStore();
export {
    FoundStore
}