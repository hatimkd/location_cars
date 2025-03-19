// import { motion } from "framer-motion";

// const stats = [
//   { id: 1, name: "Satisfaction client", value: "100%" },
//   { id: 2, name: "Livraison 24/7", value: "Disponible" },
//   { id: 3, name: "Nouveaux utilisateurs annuels", value: "46 000" },
// ];

// export default function State() {
//   return (
//     <div className="bg-white py-24 sm:py-32 rounded-2xl shadow-lg">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3">
//           {stats.map((stat) => (
//             <motion.div
//               key={stat.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: stat.id * 0.2 }}
//               className="mx-auto flex max-w-xs flex-col gap-y-4 border-t-8 p-9 border-blue-700 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <dt className="text-lg font-medium text-gray-600">{stat.name}</dt>
//               <dd className="order-first text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
//                 {stat.value}
//               </dd>
//             </motion.div>
//           ))}
//         </dl>
//       </div>
//     </div>
//   );
// }


// Compare this snippet from front/src/pages/auth/Register.jsx: 
// import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Satisfaction client", value: "100%" },
  { id: 2, name: "Livraison 24/7", value: "Disponible" },
  { id: 3, name: "Nouveaux utilisateurs annuels", value: "46 000" },
];

export default function State() {
  return (
    <div className="bg-white py-16 sm:py-20 rounded-xl shadow-md">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: stat.id * 0.15 }}
              className="mx-auto flex max-w-xs flex-col gap-y-2 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <dd className="text-3xl text-blue-800 sm:text-4xl">{stat.value}</dd>
              <dt className="text-sm text-gray-600">{stat.name}</dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}

