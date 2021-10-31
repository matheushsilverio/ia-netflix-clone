import qs from 'qs';
export default {
  mounturl(ref, queryParams) {
    let url = `${ref}`;
    try {
      if (
        typeof queryParams === 'object' &&
        Object.keys(queryParams).length > 0
      ) {
        url += '?';

        const query = qs.stringify(queryParams);
        url += query;
      }
    } catch (err) {
      console.log(err);
    }

    return url;
  },
};
