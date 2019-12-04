import axios from 'axios';

export const HOST_API = './api/';
// const RequestMap = {};
/**
 * @description 创建实例
 */
const instance = axios.create({
  baseURL: HOST_API,
  timeout: 10000,
});

/**
 * @description 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    // const key = `${config.method}${config.url}`;
    // if (!RequestMap[key]) {
    //   RequestMap[key] = true;
    //   setTimeout(() => {
    //     delete RequestMap[key];
    //   }, 500);
    // } else {
    //   const cancelResponse = {
    //     response: {
    //       data: {
    //         data: "",
    //         message: "你操作的太频繁了，请稍后再试",
    //       },
    //     },
    //   };
    //   return Promise.reject(cancelResponse);
    // }s
    return config;
  },
  err => Promise.reject(err)
);

/**
 * @description 响应拦截
 */
instance.interceptors.response.use(
  (response) => {
    const { data, } = response;
    if ([5, 206, 20001, 20003,].includes(data.code)) {
      window.location.hash = '/login';
      return Promise.reject(data);
    }
    if (data.httpStatus !== 200) {
      return Promise.reject(data);
    }
    return data;
  },
  (err) => {
    if (!err.response) {
      return Promise.reject(err.response);
    }
    return Promise.reject(err.response.data);
  },
);

export async function Get(url, option = {}) {
  return instance.get(url, { params: option, });
}

export async function Post(url, option = {}) {
  return instance.post(url, option);
}

export async function Delete(url, option = {}) {
  return instance.delete(url, { params: option, });
}
export async function Put(url, option = {}) {
  return instance.put(url, option);
}
export async function Patch(url, option = {}) {
  return instance.patch(url, option);
}

window.Get = Get;
window.Patch = Patch;
window.Post = Post;
window.Put = Put;
window.Delete = Delete;
window.HOST_API = HOST_API;
