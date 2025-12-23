// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Success() {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     setShowPopup(true);

//     const timer = setTimeout(() => {
//       setShowPopup(false);
//     }, 2500); // popup duration

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//    <div className="flex justify-center items-center h-screen w-full">
//      <AnimatePresence>
//       {showPopup && (
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 500, damping: 20 }}
//           style={{
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "rgb(244, 104, 87)",
//             color: "white",
//             width: "150px",
//             height: "150px",
//             borderRadius: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//             fontWeight: "700",
//             fontSize: "20px",
//             zIndex: 9999,
//             textAlign: "center",
//             flexDirection: "column",
//           }}
//         >
//           <span style={{ fontSize: "30px" }}>✅</span>
//           <span style={{ marginTop: "8px" }}>Success!</span>
//         </motion.div>
//       )}
//     </AnimatePresence>
//    </div>
//   );
// }

// export default Success;
