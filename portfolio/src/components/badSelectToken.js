// import React from 'react';
// import { tokens } from "../helpers/tokens.json"; 
// import { Select, MenuItem } from '@material-ui/core';

// const SelectToken = () => {
//     const [token, selectToken] = useState("Add a crypto token");

//       this.state = {value: tokens};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

    
//     const selectToken(e) => {
//         const name = e.target.name;
//         const val = e.target.value;
//         setToken(prevState => ({ ...prevState, [name]:val }));
//     };
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     };
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     };
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Add crypto token to new portfolio coin:
//             <select 
//                 value={this.state.value} 
//                 onChange={this.handleChange}
//             >
//               {Object.keys(tokens).map(item => {
//                   return (
//                       <MenuItem value={tokens[item].tokenAddress}>
//                         {tokens[item].token}
//                       </MenuItem>
//                   )
//               })}
//             </select>

//             <p className="text-md mt-3">Add crypto token</p>
//             <select
//                 value={tokens.secondCurrency}
//                 // onChange={selectToken}
//                 name="secondCurrency"
//                 className="border border-gray-300 rounded-md p-3 bg-gray-50 m-4"
//             >
//                 {Object.keys(tokens).map(item => {
//                     return(
//                         <option value={tokens[item].tokenAddress}>
//                           {tokens[item].token}
//                         </option>
//                     )
//                 })}
//             </select>

//           </label>
//           <input type="submit" value="Add" />
//         </form>
//       );
//     };
//   }

//   export default SelectToken; 