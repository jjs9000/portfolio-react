import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "TailwindCSS", "AlpineJs", "Livewire"];
    const backendSkills = ["PHP", "Laravel", "MySQL"];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am an IT student at UTHM with a passion for web development, specializing in developing Laravel web applications using TALL stacks. I enjoy building seamless and interactive web experiences and am eager to further master my web development skills to craft innovative and user-friendly digital solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                                <div className="border border-white/10 p-4 rounded-xl mb-3">
                                    <div className="flex flex-col items-start mb-4 space-y-2">
                                        <p className="font-semibold"> B.S. in Information Technology with Honours </p>
                                        <div className="flex flex-row space-x-2">
                                            <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> Universiti Tun Hussein Onn Malaysia </p>
                                            <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 2022 - Present </p>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            Relevant Coursework: Web Development, Database Management, Software Engineering
                                        </li>
                                        <li>
                                            Activities: Led team collaboration to successfully organize and host Color Run event for UTHM students.
                                        </li>
                                    </ul>
                                </div>
                                <div className="border border-white/10 p-4 rounded-xl mb-3">
                                    <div className="flex flex-col items-start mb-4 space-y-2">
                                        <p className="font-semibold"> Diploma in Information Technology </p>
                                        <div className="flex flex-row space-x-2">
                                            <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> Multimedia University </p>
                                            <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 2018 - 2020 </p>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            Relevant Coursework: Web Development, Database Management, Software Engineering
                                        </li>
                                        <li>
                                            Activities: Collaborated with team members to organize and host an inspiring motivational talk featuring Mr.
                                            Kuan Chee Heng at MMU.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> 💼 Professional Experience </h3>
                                <div className="space-y-4 text-gray-300">
                                    <div className="border border-white/10 p-4 rounded-xl">
                                        <div className="flex flex-col items-start mb-4 space-y-2">
                                            <h4 className="font-semibold"> Junior Software Developer </h4>
                                            <div className="flex flex-row space-x-2">
                                                <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">RISAU IO Sdn Bhd</p>
                                                <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">May 2021 - Sep 2021</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>
                                                Developed POS system for Malakat using Flutter to deliver efficient and scalable solutions.
                                            </li>
                                            <li>
                                                Created robust reusable code and functions to ensure optimized future development processes.
                                            </li>
                                            <li>
                                                Worked with UI/UX designers to implement intuitive and user-focused interfaces using Figma.
                                            </li>
                                            <li>
                                                Collaborated closely with developers to align with project goals and requirements.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border border-white/10 p-4 rounded-xl">
                                        <div className="flex flex-col items-start mb-4 space-y-2">
                                            <h4 className="font-semibold"> RPA Business Analyst/Developer Intern </h4>
                                            <div className="flex flex-row space-x-2">
                                                <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">Telekom Malaysia</p>
                                                <p className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">Mar 2020 - Jun 2020</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>
                                                Completed RPA and Automation courses provided by UIPath during internship period and received
                                                certificates.
                                            </li>
                                            <li>
                                                Designed and implemented efficient Robotic Process Automation workflows for emailing services
                                                using UIPath to streamline operations.
                                            </li>
                                            <li>
                                                Actively participated in team meetings and fostered collaborations to achieve project objectives.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                </div>    
        </div>
        </RevealOnScroll>
    </section>
    );
};