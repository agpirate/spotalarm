import { createContext, useContext, useState, useEffect } from 'react';
import {_setBrowserLogin_Data,
    _checkEnrollment,_setAccessPermissions,_clearLogin} from "src/hooks/useAuth"
  
import {  procApiWrap } from "src/services/axiosApi.js";
const _apiUrl = "/api";
var _suburl = _apiUrl + "/login";
let _rolingkey = ["phone", "id"]; //key for authenticating.. new Data

// Create context for authentication
const AuthContext = createContext();

// Custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // Holds the authenticated user info
    const [loading, setLoading] = useState(true);  // Loading state while checking auth

    // Function to handle login
    const login = async (formData) => {
        if ((formData[_rolingkey[0]] ?? formData[_rolingkey[1]]) == null) {
            return { status: false, data: "LogIn Keys :" + formData };
          }
          setLoading(true);  // Stop loading
          let enrollInformation =await _checkEnrollment()
          //-------------Cleare Stores
          try {
            return await procApiWrap
              .post(_suburl, formData)
              .then(async (resp) => {
                let models = resp.data["acctype"] ?? false;
                if (resp.status && models) {
                  //-----
                  resp.data = await _setAccessPermissions(resp.data,models)
                  //---------
                  console.log(enrollInformation,'stored Infor Enroll')
                  if(enrollInformation){
                    resp.data.enrolled = true
                  }
                  setUser(resp.data);
                  await _setBrowserLogin_Data(resp.data,enrollInformation)
                } else {
                  // await clearlogStatus();
                }
                setLoading(false);
                return resp; //{ _isRegistered: false,user:null };
              })
              .catch((e) => {
                // clearlogStatus();
                setLoading(false);
                return { status: false, data: e };
              }); //Handler NonFriendly Errors
          } catch (e) {
            // clearlogStatus();
            setLoading(false);
            return { status: false, data: e };
          }
    };

    // Function to handle logout
    const logout = async () => {
                //----- clear browser Data
                await _clearLogin()
                //----- clear the store_linked browser stores(that react to the variables too !!)
        setUser(null);
    };

    // Check if user is authenticated on initial load
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const isValid = false// await AuthService.isAuthenticated(token);
                if (isValid) {
                    const userData = false// AuthService.getUserFromToken(token);
                    setUser(userData);
                } else {
                    logout();  // Clear token if invalid
                }
            }
            setLoading(false);  // Stop loading
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
