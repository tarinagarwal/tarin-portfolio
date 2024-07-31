import Typewriter from "typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home: React.FC = () => {
  const { handleClick } = useOutletContext<{
    handleClick: (path: string) => void;
  }>();
  const navigate = useNavigate();
  const handleViewProjects = () => {
    handleClick("/projects");
    navigate("/projects");
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_p2er82b",
          "template_u8gochg",
          form.current,
          "LSn-d4aO_xP5SbFjJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
            toast.success("Message sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Couldn't send the message, please try again!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#22242f] border-b border-black">
            <div className="container px-4 md:px-6 z-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-[#c497fe] text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Tarin Agarwal
                    </h1>
                    <div className="text-[#c4f582] text-[1.5rem]">
                      <Typewriter
                        options={{
                          strings: [
                            "Web Development",
                            "SQL/PostgreSQL",
                            "Unity Engine",
                            "Unreal Engine",
                            "Blender",
                            "C/C++",
                            "Python",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>

                    <p className="max-w-[600px] text-white md:text-xl">
                      I'm a passionate developer with a focus on building
                      modern, scalable, and user-friendly web applications and
                      games. Let's collaborate and bring your ideas to life!
                    </p>
                  </div>
                  <div className="flex flex-col-2 gap-2 min-[400px]:flex-row">
                    <Button
                      onClick={handleViewProjects}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#c497fe] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring duration-200 hover:scale-105 disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Projects
                    </Button>
                    <a
                      href="#contact"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-white text-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none duration-200 hover:scale-105 disabled:opacity-50"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#22242f] border-b border-black"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-[#c497fe] text-3xl font-bold tracking-tighter sm:text-5xl">
                    Featured Projects
                  </h2>
                  <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Check out some of my recent projects that showcase my skills
                    and expertise.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-black border-b border-[#c497fe]">
                  <img
                    src="https://i.ibb.co/X5SYpRs/Whats-App-Image-2024-06-19-at-22-42-36-ba764734.jpg"
                    alt="Project 1"
                    className="rounded-t-xl hover:scale-105 duration-200 w-[340px] h-[200px]"
                  />
                  <CardContent className="space-y-2 p-4 text-white">
                    <h3 className="text-lg font-bold">Paint The Walls Red</h3>
                    <p className="text-muted-foreground">
                      A strategic game created with Unity Engine.
                    </p>
                    <Link
                      to="https://tarinagarwal.itch.io/paint-the-walls-red"
                      className="inline-flex h-8 items-center justify-center rounded-md duration-200 hover:scale-105 bg-[#c497fe] px-4 text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Project
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border-b border-[#c497fe]">
                  <img
                    src=""
                    alt="Project 1"
                    className="rounded-t-xl hover:scale-105 duration-200 w-[340px] h-[200px]"
                  />
                  <CardContent className="space-y-2 p-4 text-white">
                    <h3 className="text-lg font-bold">Teacher's Choice</h3>
                    <p className="text-muted-foreground">
                      An amazing website created for Teachers and Students.
                    </p>
                    <Link
                      to=""
                      className="inline-flex duration-200 hover:scale-105 h-8 items-center justify-center rounded-md bg-[#c497fe] px-4 text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Project
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-black border-b border-[#c497fe]">
                  <img
                    src="https://img.itch.zone/aW1nLzE0NDQxNTEyLnBuZw==/original/QK83r3.png"
                    alt="Project 1"
                    className="rounded-t-xl w-[340px] hover:scale-105 duration-200 h-[200px]"
                  />
                  <CardContent className="space-y-2 p-4 text-white">
                    <h3 className="text-lg font-bold">De-Bug</h3>
                    <p className="text-muted-foreground">
                      A fun strategic game made with Unreal Engine.
                    </p>
                    <Link
                      to="https://samay-entertainment.itch.io/de-bug"
                      className="inline-flex duration-200 hover:scale-105 h-8 items-center justify-center rounded-md bg-[#c497fe] px-4 text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Project
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-[#22242f]"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl text-[#c497fe] font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a project in mind or just want to say hello? Fill out
                    the form below, and I'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form
                  className="mx-auto w-full max-w-md space-y-4"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <Input
                    name="fullname"
                    type="text"
                    placeholder="Name"
                    className="w-full"
                    required
                  />
                  <Input
                    name="usermail"
                    type="email"
                    placeholder="Email"
                    className="w-full"
                    required
                  />
                  <Textarea
                    name="usermsg"
                    placeholder="Message"
                    className="w-full"
                    rows={5}
                    required
                  />
                  <div>
                    <Button
                      type="submit"
                      className="w-full duration-200 hover:scale-105 bg-[#c497fe] hover:bg-[#c4f582] text-black"
                    >
                      Submit
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
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
