import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D2B7E5] text-black py-8 border-t border-[#cccccc]">
      <div className="container mx-auto lg:px-64 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Support</h3>
            <ul>
              <li className="mb-4">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-4">
                <a href="#">Contact</a>
              </li>
              <li className="mb-4">
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <div className='lg:px-16'>
            <h3 className="text-2xl font-bold mb-6">Legal</h3>
            <ul>
              <li className="mb-4">
                <a href="#">Privacy</a>
              </li>
              <li className="mb-4">
                <a href="#">Terms</a>
              </li>
              <li className="mb-4">
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
          <div className='lg:px-20'>
            <h3 className="text-2xl font-bold mb-6">Social</h3>
            <ul>
              <li className="mb-4">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; 2023 patil. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
