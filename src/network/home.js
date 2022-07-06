import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
};
export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}