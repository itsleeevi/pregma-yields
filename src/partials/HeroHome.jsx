import React, { useState } from "react";
import Modal from "../utils/Modal";

import Waterfall from "../images/waterfall.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-6">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-teal-400">
                Pools
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-2xl text-custom-100 tracking-wide font-bold mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Just stake some tokens to earn. High APR, low risk.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4">
                  <div className="bg-custom-100 p-2 rounded-lg lg:w-72 sm:w-48 lg:h-96 sm:h-72 shadow-lg shadow-cyan-500/50 grid grid-rows-9 grid-cols-3 gap-4">
                    <div className=" pl-1 pt-1">
                      <img
                        className="p-2"
                        src={Waterfall}
                        height="100px"
                        width="100px"
                      />
                    </div>
                    <div className=" col-span-2 p-3 text-right">
                      <h3 className="font-bold text-2xl tracking-wider">
                        WATERFALL
                      </h3>
                    </div>
                    <div className="  p-3" />
                    <div className=" p-3" />
                    <div className=" p-3" />
                    <div className=" p-3" />
                    <div className="  p-3" />
                    <div className=" p-3" />
                    <div className=" p-3" />
                    <div className="  p-3" />
                    <div className=" p-3" />
                  </div>
                  <div className="bg-custom-100 p-3 rounded-lg w-72 h-96" />
                  <div className="bg-custom-100 p-3 rounded-lg w-72 h-96" />
                  <div className="bg-custom-100 p-3 rounded-lg w-72 h-96" />
                  <div className="bg-custom-100 p-3 rounded-lg w-72 h-96" />
                </div>
              </div>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
