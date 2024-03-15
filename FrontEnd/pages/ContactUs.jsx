import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

// Assuming emailjs is imported elsewhere in your project
// import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  // Assuming emailjs is used to send email
  emailjs.sendForm('service_aou2du9', 'template_mkj6j54', form.current, 'Jw9B0qYMOy8tuS3JP')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  // Assuming form.current is defined elsewhere in your component
  // e.target.reset();
};

const Button = ({ btnName }) => {
  return (
    <div className=''>
      <button className='bg-blue-300 px-6 py-3 border-solid border-slate-400 border-2 rounded-xl'>
        {btnName}
      </button>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className='w-screen px-10 pb-28'>
      <h1 className="text-6xl md:text-5xl font-bold mb-5 text-gray-600 text-center">
        Let's Work Together
      </h1>

      <div className='flex pt-12 max-w-6xl justify-between'>
        <div className='w-2/4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae explicabo assumenda cumque? Beatae ducimus voluptatem suscipit hic. Nihil perspiciatis debitis non voluptatum nam, quia deleniti modi, illo sunt cupiditate obcaecati?
          <div className='flex gap-5 text-2xl pt-4'>
            <a href="#"><AiFillInstagram /></a>
            <a href="#"><SiFacebook /></a>
            <a href="#"><SiLinkedin /></a>
            <a href="#"><BsDiscord /></a>
          </div>
        </div>

        <div className='flex flex-col w-2/4 pl-12 gap-5'>
          <form action="" className='flex flex-col  gap-2' onSubmit={sendEmail}>
            <input type="text" placeholder='Name' className='bg-slate-300 text-black placeholder-black px-8 py-2 rounded-3xl text-center align-middle' />
            <input type="email" placeholder='Email' className='bg-slate-300 text-black placeholder-black px-8 py-2 rounded-3xl text-center align-middle' />
          </form>
          <Button btnName={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
