import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="min-h-screen  text-white">
      {/* Navigation Bar */}
    

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Profile
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - User Info */}
            <div className="md:col-span-1">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">SE</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Space Explorer</h2>
                  <p className="text-gray-300 mb-6">Cosmic Voyager</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition">
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Account Information */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4">Account Information</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-400">Username:</span>
                    <span>Space Explorer</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-400">Email:</span>
                    <span>explorer@space.com</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-xl font-bold mb-4">Statistics</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-400">Total Score:</span>
                    <span>-</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-400">Rank:</span>
                    <span>-</span>
                  </div>
                </div>
              </div>

              {/* Medals Earned */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold mb-4">Medals Earned</h3>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-yellow-400">Gold × 2</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Silver × 3</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-700 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-yellow-700">Bronze × 1</p>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
                <h3 className="text-xl font-bold mb-4">Progress</h3>
                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span>Episodes Watched</span>
                    <span>2/4</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <p className="text-blue-400 mt-3">Keep climbing! Watch more episodes to level up!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;