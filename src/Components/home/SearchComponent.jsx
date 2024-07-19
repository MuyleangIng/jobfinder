import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSkills,
  selectSkillsByCategoryId,
} from "../../redux/features/category-job/categorySlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchComponent = ({ categories, isLoading }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [loadingSkills, setLoadingSkills] = useState(false);

  const skills = useSelector((state) =>
    selectSkillsByCategoryId(state, selectedCategory)
  );

  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setSelectedSkill("");
    setLoadingSkills(true);
    await dispatch(fetchSkills(categoryId));
    setLoadingSkills(false);
  };

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  return (
    <section
      className="flex border-2 border-solid border-slate-200 rounded-lg justify-between pt-4 pb-4 mt-16 px-4 text-2xl leading-8 whitespace-nowrap text-slate-700 gap-4 max-md:flex-wrap max-md:mr-1.5"
      data-aos="zoom-out-right"
    >
      {isLoading ? (
        <>
          <div className="relative flex items-center w-full max-md:w-full">
            <Skeleton height={50} className="w-full rounded-lg" />
          </div>
          <Skeleton height={50} width={288} className="rounded-lg" />
          <Skeleton height={50} width={288} className="rounded-lg" />
          <Skeleton height={50} width={100} className="rounded-lg" />
        </>
      ) : (
        <>
          <div className="relative flex items-center w-full max-md:w-full">
            <span className="absolute left-4 text-gray-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.85-6.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for position"
              className="pl-14 pr-4 py-4 rounded-lg border-2 border-solid border-slate-100 bg-slate-100 w-full"
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg border-2 border-solid border-slate-100 w-72 max-md:w-full"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-2 rounded-lg border-2 border-solid border-slate-100 w-72 max-md:w-full"
            value={selectedSkill}
            onChange={handleSkillChange}
            disabled={!skills.length || loadingSkills}
          >
            <option value="" disabled>
              {loadingSkills ? "Loading skills..." : "Select a skill"}
            </option>
            {skills.map((skill) => (
              <option key={skill.id} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </select>
          <button className="justify-center p-2 px-8 text-white font-kantumruy text-xl bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-lg:text-lg max-xl:text-xl max-2xl:text-xl max-md:px-6">
            Search
          </button>
        </>
      )}
    </section>
  );
};

export default SearchComponent;
