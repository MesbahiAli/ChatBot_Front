// import jwt from "jsonwebtoken";
// class JwtUtils {

//   getEmail() {
//     return jwt.decode(localStorage.token).sub;
//   }

//   isActif() {
//     if (localStorage.token) {
//       return jwt.decode(localStorage.token)?.exp > (new Date().getTime() + 1) / 1000; 
//     }
//     return false;
//   }

//   hasRole(roles) {
//     if (!localStorage.token) {
//       return false;
//     }
//     let role = jwt.decode(localStorage.token)?.role;
//     if (role) {
//       for (let roleIndex in roles) {
//         if (role === roles[roleIndex]) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   authorizedConfirmation(role){
//     return (this.hasRole(role) && jwt.decode(localStorage.token)?.authorized)
//   }

//   hasRoleConfirmation(){
//     return localStorage.token;
//   }

//   hasThisRole(role){
//     return jwt.decode(localStorage.token)?.role === role;
//   }

//   hasAnyRole(rolesIn) {
//     if (rolesIn.length === 0) {
//       return true;
//     }
//     if (this.hasRole(rolesIn)) {
//       return true;
//     }
//     return false;
//   }

//   logOutWithoutRefresh() {
//     localStorage.token && localStorage.removeItem("token");
//   }

//   logOut() {
//     if (localStorage.token) {
//       localStorage.removeItem("token");
//       window.location.reload();
//     }
//   }
// }

//   export default new JwtUtils();
