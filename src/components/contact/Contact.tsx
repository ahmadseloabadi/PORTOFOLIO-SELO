import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Tagline from "../reuseable/Tagline";
import { LuInstagram, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const Contact = () => {
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  // ========== Email Validation start here ==============
  const emailValidation = (email: string) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      };

      // Mengirim email menggunakan EmailJS
      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID_EMAILJS || "",
          import.meta.env.VITE_APP_TEMPLATE_ID_EMAILJS || "",
          templateParams,
          import.meta.env.VITE_APP_PUBLIC_KEY_EMAILJS || ""
        )
        .then(
          (response) => {
            setSuccessMsg(
              `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            setErrMsg("Failed to send message. Please try again later.");
            console.log("FAILED...", error);
          }
        );
    }
  };
  useEffect(() => {
    // Set a timer to clear messages after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setErrMsg("");
      setSuccessMsg("");
    }, 5000);

    // Clear timer if component unmounts or messages change before timeout
    return () => clearTimeout(timer);
  }, [errMsg, successMsg]);
  return (
    <div id="contact" className="w-full py-20   bg-gray-950">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white pb-4  ">
          Contact With Me
        </h1>
        <div className="w-3/6 h-1 bg-gray-800 rounded-xl mx-auto mb-12"></div>
      </div>
      <div className="lg:w-full h-auto flex flex-col lg:place-items-start  place-items-center  lg:gap-0 gap-12 lg:flex-row lg:justify-around">
        {/* left contact */}
        <div className="z-10 lg:w-2/6 md:w-4/6 w-[90%]  h-full shadow-[8px_8px_15px_-2px_#161716,-6px_-6px_15px_-6px_#ffffff]  bg-gradient-to-r from-gray-900 to-gray-800 p-4 lg:p-8 rounded-lg flex flex-col gap-8 justify-center ">
          <div className=" w-full h-full flex justify-center">
            <div className=" h-64 w-64 rounded-full bg-blue-950 overflow-hidden shadow-[6px_6px_15px_-2px_#000000,-4px_-4px_15px_-8px_#ffffff]  transform hover:scale-105 hover:border-designColor hover:shadow-black  hover:shadow-xl  transition-all duration-300 ">
              <img
                className="w-full h-full object-contain rounded-lg mb-2 scale-125  translate-y-6"
                src="/assets/pas_foto.png"
                alt="contactImg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white text-center ">
              Ahmad Selo Abadi
            </h3>

            <Tagline variant="contact" />
            <div className="text-base text-white flex items-center gap-2">
              <LuPhone className="min-w-[20px] min-h-[20px] relative" /> :{" "}
              <span className="text-lightText">+62 822-7995-7160</span>
            </div>
            <div className="text-base text-white flex items-center gap-2">
              <LuMail className="min-w-[20px] min-h-[20px] relative" /> :{" "}
              <span className="text-lightText">ahmadseloabadi@gmail.com</span>
            </div>
            <div className="text-base text-white flex items-center gap-2">
              <LuInstagram className="min-w-[20px] min-h-[20px] relative" /> :{" "}
              <span className="text-lightText">ahmad.selo.abadi</span>
            </div>
            <div className="text-base text-white flex items-center gap-2">
              <LuMapPin className="min-w-[20px] min-h-[20px] relative" /> :{" "}
              <span className="text-lightText">
                Poncowati, Kec. Terbanggi Besar, Kab. Lampung Tengah, Lampung
              </span>
            </div>
          </div>
        </div>
        {/* end left contact */}

        {/* right contact */}
        <div className="z-10 lg:w-3/6  w-[90%]  h-full place-items-center  bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col gap-8   lg:p-8 rounded-lg shadow-[8px_8px_15px_-2px_#161716,-6px_-6px_15px_-6px_#ffffff]">
          <form
            onSubmit={handleSend}
            className="lg:w-full flex flex-col gap-4 lg:gap-6 py-2 lg:py-5 w-5/6"
          >
            {errMsg || successMsg ? (
              <p className="  py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-center text-orange-500 rounded-lg shadow-lg shadow-black text-base tracking-wide animate-bounce">
                {errMsg} {successMsg}
              </p>
            ) : (
              <div className=" w-full h-12  "></div>
            )}

            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`rounded-lg ${
                    errMsg === "Username is required!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`rounded-lg ${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`rounded-lg ${
                  errMsg === "Please give your Email!" && "outline-designColor"
                } contactInput`}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`rounded-lg ${
                  errMsg === "Plese give your Subject!" && "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`resize-none h-32 rounded-lg ${
                  errMsg === "Message is required!" && "outline-designColor"
                } contactTextArea`}
              ></textarea>
            </div>
            <div className="w-full">
              <button className="w-full h-12 shadow-[6px_6px_15px_-2px_#000000,-4px_-4px_15px_-8px_#ffffff] bg-[hsl(225,9%,9%)] rounded-lg text-base text-gray-100 tracking-wider uppercase  hover:shadow-black  hover:text-white duration-300 hover:border-[1px] hover:shadow-xl hover:border-designColor border-transparent transition-all  active:bg-[hsl(223,9%,15%)] active:shadow-lg active:scale-95 font-semibold">
                Send Message
              </button>
            </div>
            {errMsg || successMsg ? (
              <p className="py-3 bg-slate-950 text-center text-orange-500 rounded-lg shadow-lg shadow-black md:text-base text-sm tracking-wide animate-bounce">
                {errMsg} {successMsg}
              </p>
            ) : (
              <div className=" w-full h-12  "></div>
            )}
          </form>
        </div>
        {/* end right contact */}
      </div>
    </div>
  );
};

export default Contact;
