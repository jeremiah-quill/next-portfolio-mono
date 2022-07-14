import { motion } from "framer-motion";
import { fadeInInitial, fadeInAnimate } from "../utils/variants";

const AboutPage = () => {
  return (
    <div className="pt-36 ">
      <div className="">
        <motion.img
          src="/bio-img-compress.png"
          layoutId="bioImg"
          transition={{ duration: 1 }}
          className="md:w-1/4 md:float-left md:mr-8 rounded"
        />
        <motion.p className="font-robot text-gray-400 text-2xl wrap">
          Welcome to my corner of the internet! I use this as a playground to learn technologies and
          techniques, try out ideas, and show off a little of my personality. Built with a NextJS
          frontend, styled with Tailwind and deployed to Vercel. Content managed through a Strapi
          headless CMS backend deployed to Heroku.
          <br></br>
          <br></br>
          I'm a self-taught developer with a wide range of skills across the stack and a passion for
          learning. I recently graduated from a full stack bootcamp offered by UPenn where I was
          able to refine my skills and experience working as part of a team.
          <br></br>
          <br></br>
          My background is in finance and accounting, specifically in the corporate real estate
          industry, which has given me invaluable experience as a professional. I am organized, work
          well on my own or as part of a team, and understand how to manage to a deadline.
          <br></br>
          <br></br>
          That's my son, Remi, you see over there. He's a cool little dude. I want to show him as he
          grows up that it's never too late to re-invent yourself and find success in your passions.
          <br></br>
          <br></br>
          <span className="text-white">
            I'm currently available for freelance opportunities. Please reach out
            @jcq5010@gmail.com, I would love to hear from you!
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
