import _localStorage from "src/services/storeService"; //_localStorage._clear()

//----------------
async function _setBrowserLogin_Data(user){
  try {
    //--
    _localStorage._set("userID", user["id"] ?? "");
    _localStorage._set("acctype", user.acctype ?? "");
    //------EnrollMent Storage Updating
    if(user.enrolled ?? false){
    _localStorage._set("enrolled", String(user.enrolled ?? false) );
    }else {
      _localStorage._clear("enrolled")
    }
    // useSessionStorage('_iss',user.acctype ?? '') //------------

  } catch (e) {console.log(e)
  }

}
//-----------
async function _clearLogin(){_localStorage._clear()}
//-----------------------
 function _checkLogin(){
  return Boolean(_localStorage._get("_isRegistered") ?? false );
}
async function _checkEnrollment(){
   return Boolean(_localStorage._get("enrolled") ?? false );
}
async function _setAccessPermissions(userData,models){
  userData["acctype"] = {};
  userData["group"] = models["group"] ?? "";
  userData["acctype"]["group"] = models["group"] ?? "";
  for (let key in models) {
    if (
      (models[key]["capability"] ?? false) &&
      models[key]["capability"] != "00000"
    ) {
      userData["acctype"][key] = Object.assign(
        { group: models["group"] },
        models[key]
      );
    }
  }
  return userData
}
 async function _checkLogedCredentials(formData) {
  //---this would hold inherited reactivity(assigning variable with reactive =reactive)
  if ( _checkLogin) {
    let _checkid = _localStorage._get("userID") ?? null;
    if(_checkid){
      formData['id']=_checkid
    }
    return formData;
  }
  return formData;
  //---------use Storage id && phone to check for realUserData
}

    // Get user info from token (assuming it's a JWT or similar)
  // function  getUserFromToken (token)  {
  //     // Decode the token to get user data (use a JWT library if needed)
  //     const userData = JSON.parse(atob(token.split('.')[1]));  // Basic JWT decode
  //     return userData;
  // }

  // // Simulate logout
  // function logout() {
  //     // Optionally make a logout API request
  // }
export {_setBrowserLogin_Data,_setAccessPermissions, _checkLogedCredentials,_checkEnrollment,_checkLogin,_clearLogin}
