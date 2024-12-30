import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold">MySite</p>
                        <p className="text-sm mt-2">© 2024 MySite. All rights reserved.</p>
                    </div>

                    
                    <div className="mt-6 md:mt-0">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>

                    
                    <div className="mt-6 md:mt-0">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
