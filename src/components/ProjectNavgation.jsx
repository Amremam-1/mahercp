import React, { useState } from "react"
import { projectsData } from "../constant"
import ProjectCards from "./ProjectCards"

const ProjectNavgation = () => {
  const [selectedCategory, setSelectedCategory] = useState("Website Development")

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData.flatMap((cat) => cat.projects)
      : projectsData.find((cat) => cat.category === selectedCategory)
          ?.projects || []

  return (
    <div className="container m-auto">
      <ul className="flex flex-wrap gap-5 items-center justify-center">
        {projectsData.map((category) => (
          <li
            key={category.id}
            onClick={() => setSelectedCategory(category.category)}
            className={`cursor-pointer  px-[25px] py-3 
            border dark:border-gray-400/25 border-[#2e2d2d50]  text-[#1f2022] dark:text-white shadow-md
             hover:bg-[#f4911e] transition-colors duration-300
             ${
               selectedCategory === category.category
                 ? "bg-[#f4911e]"
                 : "bg-transparent"
             }
             `}
          >
            <span className="fontFigtree font-semibold">
              {category.category}
            </span>
          </li>
        ))}
      </ul>

      {/* View Port Projects */}
      <ProjectCards filteredProjects={filteredProjects} />
    </div>
  )
}

export default ProjectNavgation
