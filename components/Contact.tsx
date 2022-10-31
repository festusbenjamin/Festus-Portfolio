import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactsInfo } from "../typings";
import emailjs from "@emailjs/browser";


type Props = {
  contactsInfo: ContactsInfo
};


export default function Contact({ contactsInfo }: Props) {
  const form = useRef()
  const submitData = () => {  
    emailjs.sendForm('service_imdwxjd', 'template_031opjd', form.current, 'a44VY0bul68XOhtCa')
      .then((result) => {
        toast.success('Thankyou for contacting us!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }, (error) => {
        toast.error(error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      });
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase text-gray-500 text-2xl tracking-[20px]">
        Contacts{" "}
      </h3>

      <div className="flex flex-col space-y-8">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I've got what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="flex flex-col xl:flex-row xl:space-x-10">
          <div className="flex mb-5 items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">{contactsInfo?.phoneNumber}</p>
          </div>
          <div className="flex mb-5 items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">{contactsInfo?.email}</p>
          </div>
          <div className="flex mb-5 items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">{contactsInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={submitData}
          ref={form}
          className="flex flex-col w-screen md:w-fit space-y-2 mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              name="from_name"
              placeholder="Name"
              className="contactInput mb-2 md:mb-0"
              type="text"
              required
            />
            <input
            name="email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
          name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
          name="message"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
