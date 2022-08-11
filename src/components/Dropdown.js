import React, { useState, useEffect, useRef } from "react";
import "../styles/Dropdown.scss";

import ArrowIcon from "../assets/svg/IconArrow";

function Dropdown({ options, id, style, required = false }) {
  return (
    <select
      className="pt-4 pr-2 pb-4 pl-4"
      name={id}
      id={id}
      required={required}
    >
      <option hidden disabled selected></option>
      {options.map((item, key) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
}

//     <div style={{ width: "30rem" }}>
//       <div
//         ref={toggleBtn}
//         style={{ width: "100%", borderColor: "#D7DAE9" }}
//         className="flex flex-row items-center
// 				bg-white cursor-pointer gap-3 border radius
// 				pt-3 pr-2 pb-3 pl-4
// 				"
//         onClick={() => setOpen(!open)}
//       >
//         <p disabled className="grow-1 color-navy-700">
//           {selected ? selected : ""}
//         </p>
//         <ArrowIcon />
//       </div>
//       {open && (
//         <ul>
//           {options.map((item, idx) => {
//             return (
//               <li
//                 key={idx}
//                 className="border radius-sm pt-3 pr-2 pb-3 pl-4 my-0.5
// 								cursor-pointer hover:border-red"
//                 style={{ borderColor: "#D7DAE9" }}
//                 onClick={() => handleSelect(item)}
//               >
//                 <p>{item}</p>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>

// function Dropdown({ options }) {
//   const [selected, setSelected] = useState(null);
//   const [open, setOpen] = useState(false);
//   const toggleBtn = useRef(null);

//   const toggleList = () => setOpen(!open);

//   const handleSelect = (item) => {
//     setSelected(item);
//     setOpen(false);
//   };

//   useEffect(() => {
//     const closeDropdown = ({ target }) => {
//       if (
//         target !== toggleBtn.current &&
//         target.parentNode !== toggleBtn.current
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("click", closeDropdown);
//     return () => document.removeEventListener("click", closeDropdown);
//   }, []);

//   return (
//     <div style={{ width: "30rem" }}>
//       <div
//         ref={toggleBtn}
//         style={{ width: "100%", borderColor: "#D7DAE9" }}
//         className="flex flex-row items-center
// 				bg-white cursor-pointer gap-3 border radius
// 				pt-3 pr-2 pb-3 pl-4
// 				"
//         onClick={() => setOpen(!open)}
//       >
//         <p disabled className="grow-1 color-navy-700">
//           {selected ? selected : ""}
//         </p>
//         <ArrowIcon />
//       </div>
//       {open && (
//         <ul>
//           {options.map((item, idx) => {
//             return (
//               <li
//                 key={idx}
//                 className="border radius-sm pt-3 pr-2 pb-3 pl-4 my-0.5
// 								cursor-pointer hover:border-red"
//                 style={{ borderColor: "#D7DAE9" }}
//                 onClick={() => handleSelect(item)}
//               >
//                 <p>{item}</p>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

export default Dropdown;
