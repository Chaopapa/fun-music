// 重写axios
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosPromise } from 'axios'

export interface ResponseData {
  code: 0 | 1 | -1,
  message: string,
  data: any
}

class HtttpRequest {

  // 合并配置项
  private mergeConfig(...configs: AxiosRequestConfig[]): AxiosRequestConfig {
    return Object.assign({
    }, ...configs);
  }



  // 设置get请求别名
  public get(url: string, config: AxiosRequestConfig = {}): AxiosPromise {
    const newConfig = this.mergeConfig(config, { url, method: 'GET' });
    return this.request(newConfig);
  }

  // 设置post请求别名
  public post(url: string, data: any = {}, config: AxiosRequestConfig = {}): AxiosPromise {
    const newConfig = this.mergeConfig(config, { url, method: 'POST' });
    return this.request(newConfig);
  }

  // 构建请求
  public request(config: AxiosRequestConfig): AxiosPromise {
    // 1.创建请求
    const instance: AxiosInstance = axios.create();
    // 2.添加拦截
    this.interceptor(instance);
    // 3.发送请求
    return instance(config);
  }

  // 添加拦截
  private interceptor(instance: AxiosInstance) {
    // 拦截请求
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // config.baseURL = 'http://10.20.152.69:5000';
      config.baseURL = 'http://localhost:3000';
      config.headers['Cookie'] = 'mail_psc_fingerprint=2b1767e56e4e8baf4f5a83eb467875c3; P_INFO=m15059982110@163.com|1576554669|0|urs|00&99|null&null&null#gud&440300#10#0#0|150110&1||15059982110@163.com; _iuqxldmzr_=32; _ntes_nnid=3430c95d53c54804cee8be468f0236a1,1576554674853; _ntes_nuid=3430c95d53c54804cee8be468f0236a1; WM_TID=YkTOL7UW7mZAVQUBQQI47wJG75pesRDP; JSESSIONID-WYYY=lQjru06DCEPfrZY%2B%2FoQlaNt1zAt4smF%2BdCz%2Bz3PfO1%2By1sS9vOS2brogQyKQGj%2F6JHAiCjoK%2FZ%2BYWmw1Wz%2F%2B7cxSSlSJaGUWYHhEH9bosDX9ReltGjOI%2BHxYxSpxTYSZmAqpq20mwYyxCze7IcYxaO%2B5wAdc0b1vS8mcPScmFdqtBU5o%3A1582529841820; WM_NI=%2BEG10A6TRMTfMD67x1GjmpwrLcFaAthTXb8CmYR5ZMBDYyBgypCS7MeMexaCM2HwuwQOMsAdJDW6sPD9L83JylVYci0wc7zGorpiH7SMZWhEOKaXr5WSx%2FdsyUidrK0HcnI%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee8fd346b093fc9bcd6694b48eb7d84b879a8baaf54e85acc0b3c26b85f08f92e22af0fea7c3b92ae99b89d2b34bf68c9eaed76e8f9cfad8fb3b85b6a391f67a90bd8a82c480ac8c9883bb49af879ed6d947829c979ac16dbbb08db4b647a793ab99e4498fee8898f87d93918394c4708a9c99d7f25c88e784d9b242bbb49abae263f4a9add8f94dadaec08acb3d919396b8eb4f8d95afb9f13f958db8d0e779bb8ba785f141f498ad8fcc37e2a3; __remember_me=true; ntes_kaola_ad=1; MUSIC_U=f21dbd0e0c38d2d3662ccbb5c88e231afa253e939d36cab52a10d70667b03a9fcc8dbd1e681f34fde6aa43969bfdfce27b6b220de7f6b737; __csrf=597e2f50aa3dca69c6629aaf2004257b'
      return config;
    }, (error: Error) => {
      return Promise.reject(error);
    });

    // 拦截响应
    instance.interceptors.response.use((response: AxiosResponse) => {
      const { data: { code, message } } = response;
      if (code === 200) {
        //成功
        return Promise.resolve(response);
      } else {
        // 失败
        //UI提示用户请求失败
        console.log(response);
        return Promise.reject(new Error(message))
      }

    }, (error: Error) => {
      return Promise.reject(error);
    })
  }


}


export default HtttpRequest;