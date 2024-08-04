import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast, ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners"; // Import PacmanLoader for loading state

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const UserProfile = [
    {
      name: "Tarin Agarwal",
      profession: "Game Developer",
      email: "tarinagarwal@gmail.com",
      state: "Karnataka",
      country: "India",
      phoneNumber: "+91 9352023583",
      expLevel: 4,

      hobbies: ["Reading", "Travelling", "Cooking", "Photography", "Gaming"],
      skills: [
        { name: "Game Dev", progress: 90 },
        { name: "Web Dev", progress: 70 },
        { name: "App Dev", progress: 60 },
        { name: "C/C++", progress: 92 },
        { name: "Python", progress: 80 },
      ],
    },
  ];

  const Resume = () => toast.error("Resume Not Available");

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#22242f]">
        <PacmanLoader color="#c497fe" size={50} />
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col min-h-screen justify-center bg-[#22242f]">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-100">
            <div className="rounded-md p-4">
              <div className="grid w-100 auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                {UserProfile.map((user, index) => (
                  <div key={index} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <Card
                        className="sm:col-span-2 bg-[#2E2E3A] border border-[#4E4E6A]"
                        x-chunk="dashboard-05-chunk-0"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle>
                            <div className="flex justify-between">
                              <img
                                src="https://i.ibb.co/3mn2P2L/Whats-App-Image-2024-07-19-at-19-48-12-a0ae1728.jpg"
                                alt="User"
                                className="h-[8rem] w-[8rem] rounded"
                              />
                            </div>
                          </CardTitle>
                          <CardDescription className="max-w-lg text-balance leading-relaxed font-bold text-2xl text-black">
                            <div className="grid gap-1 text-[#c497fe]">
                              {user.name}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 gap-4">
                            <ul className="grid gap-3">
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  Profession
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.profession}
                                </span>
                              </li>
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  Email Address
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.email}
                                </span>
                              </li>
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  State
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.state}
                                </span>
                              </li>
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  Country
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.country}
                                </span>
                              </li>
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  Phone Number
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.phoneNumber}
                                </span>
                              </li>
                              <li className="flex items-center justify-between font-semibold">
                                <span className="text-white sm-max1:text-sm">
                                  Experience Level
                                </span>
                                <span className="text-[#c4f582] sm-max1:text-sm">
                                  {user.expLevel} Years
                                </span>
                              </li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="sm:col-span-2 z-0 bg-[#2E2E3A] border border-[#4E4E6A] h-[31rem]"
                        x-chunk="dashboard-05-chunk-1"
                      >
                        <CardHeader className="rounded-t pb-3">
                          <CardTitle className="text-2xl">
                            <div className="flex justify-between text-[#c497fe]">
                              Skills
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-40 w-full rounded-md border p-4 mt-4 border-[#4E4E6A]">
                            <div className="grid grid-cols-1 gap-4">
                              <ul className="grid gap-3">
                                {user.skills.map((skill, skillIndex) => (
                                  <li
                                    key={skillIndex}
                                    className="flex items-center justify-between font-semibold"
                                  >
                                    <span className="text-white sm-max1:text-sm">
                                      {skill.name}
                                    </span>
                                    <Progress
                                      value={skill.progress}
                                      aria-label={`${skill.progress}% increase`}
                                      className="w-40 sm-max1:w-20 bg-white"
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </ScrollArea>
                          <Separator className="my-4" />
                          <div className="grid grid-cols-1 gap-4">
                            <fieldset className="grid gap-6 rounded-lg border border-[#4E4E6A] p-4">
                              <legend className="-ml-1 px-1 text-sm font-medium text-[#c497fe]">
                                Hobbies
                              </legend>
                              <ScrollArea className="h-28 w-full rounded-md p-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                                  {user.hobbies.map((hobby, hobbyIndex) => (
                                    <Button
                                      key={hobbyIndex}
                                      className="text-center border border-[#c497fe] hover:bg-transparent bg-transparent text-white"
                                    >
                                      {hobby}
                                    </Button>
                                  ))}
                                </div>
                              </ScrollArea>
                            </fieldset>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="sm:col-span-2 z-0 bg-[#2E2E3A] border border-[#4E4E6A]"
                        x-chunk="dashboard-05-chunk-1"
                      >
                        <CardHeader className="rounded-t pb-3">
                          <CardTitle className="text-2xl">
                            <div className="flex justify-between text-[#c497fe]">
                              General Information
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-sm">
                          <div className="grid gap-3 text-white">
                            <p>
                              Hi, I'm a developer who loves diving into all
                              things tech. Whether it's building web apps with
                              React and Node.js, crafting game worlds in Unity
                              and Unreal Engine, or experimenting with languages
                              like GoLang and Dart, I'm always eager to learn
                              and create. My toolkit includes everything from
                              TypeScript and PostgreSQL to Tailwind CSS and
                              Python, and I enjoy finding the best way to solve
                              problems and bring ideas to life. I am all about
                              pushing my skills further and seeing where my
                              curiosity takes me next.
                            </p>
                          </div>
                          <Separator className="my-4" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid">
                              <div className="font-semibold text-white">
                                Education
                              </div>
                              <address className="grid gap-0.5 not-italic text-muted-foreground">
                                <div className="font-bold text-[#c4f582]">
                                  BMS Institute of Technology and Management
                                </div>
                              </address>
                            </div>
                            <div className="grid auto-rows-max">
                              <div className="font-semibold text-white">
                                Work History
                              </div>
                              <div className="font-bold text-[#c4f582]">
                                Remedy Games
                              </div>
                            </div>

                            <div className="grid auto-rows-max">
                              <div className="font-semibold text-white">
                                Languages
                              </div>
                              <div className="font-bold text-[#c4f582]">
                                English, Hindi , Spanish
                              </div>
                            </div>

                            <div className="grid auto-rows-max">
                              <div className="font-semibold text-white">
                                Role
                              </div>
                              <div className="font-bold text-[#c4f582]">
                                Student
                              </div>
                            </div>
                            <div className="grid auto-rows-max">
                              <div className="font-semibold text-white">
                                Department
                              </div>
                              <div className="font-bold text-[#c4f582]">
                                CSE
                              </div>
                            </div>
                            <div className="grid auto-rows-max600">
                              <div className="font-semibold text-white">
                                Birthday
                              </div>
                              <div className="font-bold text-[#c4f582]">
                                March 7, 2005
                              </div>
                            </div>
                          </div>
                          <Separator className="my-2.5" />
                          <div className="grid gap-3">
                            <div className="font-semibold text-white">
                              Resume
                            </div>
                            <dl className="grid gap-3">
                              <div className="flex items-center justify-between">
                                <Button
                                  onClick={Resume}
                                  className="bg-[#c497fe] text-black hover:bg-[#c4f582]"
                                >
                                  Download Resume
                                </Button>
                                <ToastContainer
                                  position="top-right"
                                  autoClose={5000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="dark"
                                />
                              </div>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
