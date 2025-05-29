import React from 'react';

const ResumePage = () => {
    
    const resumeFileName = "Resume.pdf"; 
    const resumeFilePath = `/${resumeFileName}`; 

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFilePath;
        link.download = resumeFileName; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gradient-to-br from-[#18122B] via-[#2A1E4A] to-[#3C2A6F] min-h-screen flex flex-col items-center justify-start md:justify-center p-5 text-white">
            <h1 className="text-4xl mt-20 lg:text-5xl font-semibold mb-8">My Resume</h1>
            <button 
                onClick={handleDownload}
                className="my-8 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md 
                           hover:bg-[#18122B] hover:border-white hover:border transition-colors duration-300 transform hover:scale-105"
            >
                Download Resume
            </button>
            <div className="w-[90%] lg:w-[70%] h-[50vh] md:h-[70vh] lg:h-[100vh] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <iframe 
                    src={resumeFilePath}
                    title="Shreya Kumar Resume" 
                    className="w-full h-full" 
                    frameBorder="0"
                >
                    <p>Your browser does not support iframes. You can download the resume <a href={resumeFilePath}>here</a>.</p>
                </iframe>
            </div>
        </div>
    );
};

export default ResumePage;