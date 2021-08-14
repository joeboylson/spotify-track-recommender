import { get } from "axios";
import { debounce, isEmpty } from 'lodash';

export const searchTrack = debounce((queryString, callback) => {

  if ( isEmpty(queryString) ) {
    return callback([]);
  }
  
  get('/api/track', { params: { queryString } }).then(({data}) => {
    
    if (!data.success) {
      console.log(data.message)
      return callback([])
    }

    console.log(data)
    return callback(data.data.items)

  })
}, 1000)