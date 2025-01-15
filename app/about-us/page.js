// import Image from 'next/image';
// import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// export default function About() {
//   return (
//     <div className="bg-black min-h-screen flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>

//       <div className="flex flex-col md:flex-row md:space-x-10">
//         {/* Person 1 */}
//         <div className="flex flex-col items-center mb-8 md:mb-0">
//           <Image 
//             src="/varad-img.png" 
//             alt="Varad Deshpande" 
//             width={180} 
//             height={180} 
//             className="rounded-full shadow-lg"
//           />
//           <p className="mt-4 text-lg font-semibold text-white">Varad Deshpande</p>
//           <p className="text-gray-300 text-sm">Full Stack Web Developer</p>
//         </div>

//         {/* Person 2 */}
//         <div className="flex flex-col items-center">
//           <Image 
//             src="/vishal-img.png" 
//             alt="Vishal Tambi" 
//             width={180} 
//             height={180} 
//             className="rounded-full shadow-lg"
//           />
//           <p className="mt-4 text-lg font-semibold text-white">Vishal Tambi</p>
//           <p className="text-gray-300 text-sm">Full Stack Web Developer</p>
//         </div>
//       </div>

//       <div className='flex gap-10 mt-10'>
//         <div className="flex space-x-6">
//           {/* LinkedIn Icon */}
//           <a href="https://linkedin.com/varaddeshpande15" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>

//           {/* Instagram Icon */}
//           <a href="https://instagram.com/varad.dev" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>

//           {/* Twitter Icon */}
//           <a href="https://x.com/dev_varad" target="_blank" rel="noopener noreferrer">
//             <FaTwitter size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>
//         </div>

//         <div className="flex space-x-6">
//           {/* LinkedIn Icon */}
//           <a href="https://www.linkedin.com/in/vishal-tambi-b180b724b/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>

//           {/* Instagram Icon */}
//           <a href="https://instagram.com/jordansmith" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>

//           {/* Twitter Icon */}
//           <a href="https://twitter.com/jordansmith" target="_blank" rel="noopener noreferrer">
//             <FaTwitter size={36} className="text-white hover:text-gray-400 transition-colors duration-300" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-10 text-white">
      <h1 className="text-5xl font-extrabold mb-10">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Person 1 */}
        <div className="flex flex-col items-center gap-2">
          <Image 
            src="/varad-img.png" 
            alt="Varad Deshpande" 
            width={200} 
            height={200} 
            className="rounded-full shadow-lg border-2 border-white border-xl"
          />
          <p className="mt-4 text-xl font-semibold">Varad Deshpande</p>
          <p className="text-gray-300 text-sm">Full Stack Web Developer</p>
        </div>

        {/* Person 2 */}
        <div className="flex flex-col items-center gap-2">
          <Image 
            src="/vishal-img.png" 
            alt="Vishal Tambi" 
            width={200} 
            height={200} 
            className="rounded-full shadow-lg border-2 border-white border-xl"
          />
          <p className="mt-4 text-xl font-semibold">Vishal Tambi</p>
          <p className="text-gray-300 text-sm">Full Stack Web Developer</p>
        </div>
      </div>

      <div className="mt-10 flex space-x-8 gap-8">
        <div className="flex space-x-6">
          <a href="https://linkedin.com/varaddeshpande15" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>

          <a href="https://instagram.com/varad.dev" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>

          <a href="https://x.com/dev_varad" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/vishal-tambi-b180b724b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>

          <a href="https://instagram.com/jordansmith" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>

          <a href="https://twitter.com/jordansmith" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
