import reduxApi, {transformers} from 'redux-api';
import customFetch from 'api/axios';

// Example
export default reduxApi({
  signin: {
    url: '/users/login',
    options:(url, params, getState) => {
      return {
        method: "POST",
        headers: {},
        data: {}
      };
    }
  }
}).use('fetch', customFetch);