import { get } from "axios";
import { debounce, isEmpty } from 'lodash';

export const searchArtist = debounce((queryString, callback) => {

  if ( isEmpty(queryString) ) {
    return callback([]);
  }
  
  get('/api/artist', { params: { queryString } }).then(({data}) => {
    if (!data.success) return callback([]);''
    return callback(data.data.items);''
  })
}, 1000)