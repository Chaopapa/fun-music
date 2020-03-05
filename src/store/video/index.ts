import { observable, action, runInAction } from "mobx";
import Api from "../../ajax/api";
import ajax from "../../ajax";

class VideoStore {
    @observable
    videoList: Array<any>;
    @observable
    videoTags: Array<any> = [{ key: 1, title: '推荐' }];
    @action.bound
    getVideoList(id: number) {
        runInAction(async () => {
            let result = await ajax.get(Api.VIDEO_LIST, {
                params: {
                    id
                }
            })
        })
    }
    @action.bound
    getVideoTags() {
        runInAction(async () => {
            let result = await ajax.get(Api.VIDEO_TAGS);
            this.videoTags= result.data.data.filter(item => {
                if (item.id.toString().length == 4) {
                    item.key = item.id;
                    item.title = item.name;
                    return item
                }
            });
            console.log(this.videoTags);
           



        })
    }
}

export default new VideoStore();
export {
    VideoStore
}
