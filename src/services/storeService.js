
let isEmpty = ["null", "undefined", "", null, undefined];
var _localStorage = {

  _get: (_key = null, ifNotnewValue = null) => {
    try {
      const data = localStorage.getItem(_key);
      if (isEmpty.includes(data)) {
        localStorage.setItem(_key, JSON.stringify(ifNotnewValue));
        return ifNotnewValue;
      } else {return JSON.parse(data);}
    }
    catch {return false;}
  },
  _set: (_key = null, _item = null) => {
    return _item ? localStorage.setItem(_key, JSON.stringify(_item)) : false;
  },
  _getsession: (_item = null) => {
    return _item ? sessionStorage.getItem(_item) : false;
  },
  _setsession: (_key = null, _item = null) => {
    return _item ? sessionStorage.setItem(_key, _item) : false;
  },
  _clear: (_key = null) => {
    sessionStorage.clear();
    _key ? localStorage.removeItem(_key) : localStorage.clear();
    return { path: "/", name: "", query: { userid: "" }, params: {} };
  },
  _reroute: (_pathName, _pathUrl, deviceSmall) => {
    let _ismobile=[];
      if(deviceSmall){
         _ismobile =  [`/play/s${_pathUrl}`, "s" + _pathName]
         localStorage.setItem('path', JSON.stringify(`s${_pathUrl}`))
      }else{
         _ismobile =   [`/play/${_pathUrl}`, _pathName]
         localStorage.setItem('path', JSON.stringify(`${_pathUrl}`))
      }
    return {
      path: _ismobile[0],
      name: _ismobile[1],
      query: { userid: "" },
      params: {},
    };
  },
};

// const _localStorage2 = {
//   _get: (_item) => {
//     return $q.localStorage.getItem(_item);
//   },
//   _set: (_key, _item) => {
//     return $q.localStorage.set(_key, _item);
//   },
//   _clear: (_key, _item) => {
//     return $q.localStorage.clear();
//   },
// };

export default _localStorage;
