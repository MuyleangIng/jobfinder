import React from "react";
import { FaEdit, FaClock } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const ProfileDetailComponent = ({
  username,
  email,
  address,
  bio,
  phone_num,
  created_at,
  avatar,
  cover,
}) => {
  return (
    <div>
      <section className="flex flex-col my-20">
        {/* <h1 className="w-full text-left text-xl font-bold leading-7 text-black uppercase max-md:max-w-full">
          User Profile
        </h1> */}
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow pb-3.5 w-full bg-gray-50 rounded-lg max-md:mt-3 max-md:max-w-full">
                <div className="flex relative flex-col pt-2.5 pr-3 pl-5 w-full min-h-[127px] max-md:pl-5 max-md:max-w-full">
                  <div>
                    <img
                      loading="lazy"
                      src={
                        cover ||
                        "https://cdn.builder.io/api/v1/image/assets/TEMP/3f12d4226ada8a92d9f6e286bcd915f8d95f574ecbe753098a13433ce6079566?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                      }
                      alt="cover"
                      className="object-cover rounded-t-lg absolute inset-0 size-full"
                    />
                    <FaEdit className="max-md:w-[16px]" />
                  </div>

                  <img
                    loading="lazy"
                    src={
                      avatar ||
                      "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/449477760_3586716934973920_8504040381177330817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmOimc66FuBKIkdaXenR8UbBvoWt64ACFsG-ha3rgAIT6kBl-fELq8SKwJNzOM5zm1UUR4bc1dMNQaKrumdVIG&_nc_ohc=g3X-ZQto3isQ7kNvgHgqhM1&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYBjTnDP0OE1vIqYQBaIhUBLY7IQzFkbx4V6HxpYAt_1lQ&oe=669AC143"
                    }
                    alt="User profile picture"
                    className="z-10 mt-11 -mb-10 rounded-lg  max-w-full aspect-[1.03] w-[100px] max-md:mt-8 max-md:mb-2.5"
                  />
                </div>
                <div className="flex flex-col ml-36 max-md:ml-0">
                  <div className="flex flex-row gap-2 w-full">
                    <h2 className="self-start -mb-2 text-2xl mt-1 font-sowanphum font-semibold leading-7 text-black max-md:ml-5">
                      {username}
                    </h2>
                  </div>
                  <span className="self-start text-sm text-gray-500 font-semibold leading-7 text-black max-md:ml-5">
                    <span className="text-[14px]">@</span>
                    {username}
                  </span>
                </div>
                <div className="flex gap-5 justify-between items-end gap-2 mr-5 ml-5 text-base max-md:flex-wrap max-md:mr-2.5 max-md:mt-3 max-md:max-w-full">
                  <div className="flex flex-col mt-3">
                    <div className="flex gap-3 text-black leading-[175%]">
                      <IoHome className="self-center w-4 rounded-full aspect-square fill-gray-700 fill-opacity-50 max-md:w-5" />

                      <p className="flex-auto text-left my-auto max-md:text-sm">
                        {address || "No location"}
                      </p>
                    </div>
                    <div className="flex mt-1 gap-3 text-black leading-[175%]">
                      <FaClock className="self-center w-4 rounded-full aspect-square fill-gray-700 fill-opacity-50 max-md:w-5" />
                      <p className="flex-auto text-left my-auto max-md:text-sm">
                        {created_at || "No date joined"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-white whitespace-nowrap max-md:-mt-2">
                    <button className="justify-center px-2.5 py-1.5 bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-md:text-sm">
                      Save
                    </button>
                    <button className="justify-center px-2.5 py-1.5 bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-md:py-[5px] max-md:text-sm">
                      Edit profile
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow px-4 pt-2.5 pb-20 w-full bg-gray-50 rounded-lg max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start text-xl font-semibold text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <h3 className="mt-2 max-md:mt-2 max-md:text-sm">BIO</h3>
                  <div className="p-1 max-md:mt-0 hover:bg-gray-200">
                    <FaEdit className="fill-gray-700 max-md:w-[16px]" />
                  </div>
                </div>
                <p className="self-start mt-4 ml-0.5 text-left text-lg font-medium text-neutral-500 max-md:mt-2 max-md:text-sm max-md:max-w-full">
                  {bio || "No bio"}
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow px-6 py-5 w-full text-base font-medium text-black bg-gray-50 rounded-lg max-md:px-5 max-md:mt-2 max-md:max-w-full">
                <h3 className="text-xl text-left font-semibold max-md:text-sm max-md:max-w-full">
                  PERSONAL INFORMATION
                </h3>
                <label
                  for="username"
                  className="mt-6 text-left max-md:text-sm max-md:max-w-full"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  className="justify-center items-start text-gray-500 px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:py-2 max-md:text-sm max-md:max-w-full"
                />
                <label
                  for="email"
                  className="mt-6 text-left max-md:text-sm max-md:max-w-full"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  className="justify-center items-start text-gray-500 px-3 py-4 mt-3 whitespace-nowrap rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:text-sm max-md:py-2 max-md:max-w-full"
                />
                <label
                  for="phone"
                  className="mt-6 text-left max-md:text-sm max-md:max-w-full"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone_num || "+855 "}
                  className="justify-center items-start text-gray-500 px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:py-2 max-md:text-sm max-md:max-w-full"
                />
                <label
                  for="role"
                  className="mt-6 text-left max-md:text-sm max-md:max-w-full"
                >
                  Role
                </label>
                <input
                  id="role"
                  type="text"
                  value="Senior Product Manager"
                  className="justify-center items-start text-gray-500 p-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:py-2 max-md:text-sm max-md:max-w-full"
                />
              </form>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <section className="flex flex-col pt-1.5 pb-20 bg-gray-50 rounded-lg max-md:max-w-full">
                  <div className="flex flex-col px-4 mt-1 max-md:max-w-full">
                    <div className="flex flex-row w-full justify-between">
                      <h3 className="text-xl text-left font-semibold text-black max-md:text-sm max-md:max-w-full">
                        SKILLS & INTERESTS
                      </h3>
                      <div className="flex flex-row">
                        <div className="p-1 border-2 max-md:mt-0 hover:bg-gray-200">
                          <IoMdAdd className="fill-gray-900 text-bold w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 self-start mt-5 text-sm leading-4 whitespace-nowrap text-neutral-500">
                      <div className="flex gap-1 px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:py-1">
                        <span>UX/UI</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                          alt="Remove skill"
                          className="shrink-0 my-auto w-2.5 aspect-square"
                        />
                      </div>
                      <div className="flex gap-1 px-3 py-2 bg-white rounded border border-solid border-slate-300 max-md:py-1">
                        <span>Front-End</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                          alt="Remove skill"
                          className="shrink-0 my-auto w-2.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col px-4 pt-2.5 pb-4 mt-4 text-base font-semibold text-black bg-gray-50 rounded-lg max-md:gap-1 max-md:max-w-full">
                  <div className="flex gap-5 items-start px-px text-xl max-md:flex-wrap max-md:max-w-full">
                    <h3 className="flex-auto text-left mt-2 max-md:pb-5 max-md:text-sm">
                      SOCIAL MEDIA ACCOUNT
                    </h3>
                  </div>
                  <div className="flex gap-4 mt-5 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5 max-md:mt-0.5 max-md:max-w-full">
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25ca0a0f2812a175d12a41751cf21c1449d2848be474a70ef6601ba45bfcff3?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="LinkedIn logo"
                        className="shrink-0 aspect-[1.03] fill-neutral-500 max-md:w-[20px] w-[30px]"
                      />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 items-start px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e037e65853560dd7ef52263d3fa78366ca7a8d2c1db77c1fc0fd489a04fe6d7a?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="GitHub logo"
                        className="shrink-0 self-start aspect-[1.03] fill-black fill-opacity-50 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Github</span>
                    </a>
                  </div>
                  <div className="flex gap-4 mt-2 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-1.5">
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea0941d288028e0c21811a0c23dd4d813b8c87cd00ba58289398020f7ed9483?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="Facebook logo"
                        className="shrink-0 aspect-[1.03] fill-neutral-500 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-1 flex-auto gap-2.5 px-20 py-2 rounded-md border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:text-sm max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/071b75cc3785f82729e6c7eb6106216f9fbf7d8845ade0b9116026a410e6d25d?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                        alt="Google logo"
                        className="shrink-0 aspect-[1.03] fill-black fill-opacity-50 max-md:w-[20px] w-[30px]"
                      />
                      <span className="my-auto">Google</span>
                    </a>
                  </div>
                  <button className="justify-center items-center px-16 py-4 mt-10 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:px-5 max-md:py-2 max-md:mr-1.5  max-md:max-w-full">
                    + Add more
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetailComponent;
