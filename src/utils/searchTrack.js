import { get } from "axios";
import { debounce, isEmpty } from 'lodash';

export const searchTrack = debounce((queryString, callback) => {

  if ( isEmpty(queryString) ) {
    return callback([]);
  }
  
  get('/api/track', { params: { queryString } }).then(({data}) => {
    if (!data.success) return callback([]);
    return callback(data.data.items);
  })
}, 1000)