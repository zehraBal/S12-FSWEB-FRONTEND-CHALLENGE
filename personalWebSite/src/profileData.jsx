export const profileData = {
  summary: {
    name: "Zehra",
    sumTitle: "I am a Frontend Developer...",
    sumContent:
      "...who likes to craft solid and scalable frontend products with great user experience",
  },

  skillsTitle: "Skills",

  basicInfo: {
    profileTitle: "Profile",

    title: "Basic Information",
    birthday: {
      title: "Date of Birth",
      data: "11.11.1998",
    },
    residence: {
      title: "City of Residence",
      data: "İstanbul",
    },
    education: {
      title: "Educational Background",
      data: "Sakarya University, EEE , 2022",
    },
    preference: {
      title: "Preferred Role",
      data: "Frontend,UI",
    },
  },
  aboutMe: {
    title: "About Me",
    data: "I graduated from Sakarya Univ. with a degree in EEE and later completed a program in Computer Programming at Anadolu Univ. I worked for a year at Polar Marine Denizcilik on embedded software projects and creating websites using CMS. Currently, I am enrolled in Workintech's full stack development program, having completed the frontend portion.",
  },
  projects: {
    title: "Projects",
    content: [
      {
        title: "Pizza Challenge Project",
        description:
          "This project is a single-page application (SPA). Created using React, this application allows users to easily place food orders by clicking the order button on the homepage. When users fill out the order form, they are redirected to a confirmation page if the form validations are successful. In this project, fundamental React concepts such as routing, forms, validations, and state management are effectively utilized.",
        used: ["react", "vercel"],
        viewSite: "https://pizza-challenge-blush.vercel.app/",
        git: "https://github.com/zehraBal/fsweb-s7-challenge-pizza",
        image: "/images/pizza.png",
      },
      {
        title: "X Mockup Project",
        description:
          "This project is a React application that utilizes APIs to fetch user information and tweet data. It effectively manages complex state management required for these integrations. Users can view and interact with data fetched from the API. Leveraging React's robust state management capabilities, the application ensures smooth data flow and enhances user experience.",
        used: ["react", "vercel"],
        viewSite: "https://x-mockup.vercel.app/",
        git: "https://github.com/zehraBal/X-Mockup",
        image: "/images/x.png",
      },
      {
        title: "To Do App",
        description:
          "This project is a React To-Do application that utilizes Redux for state management. The application allows users to add new tasks, edit existing ones, and completely delete tasks from a to-do list. Additionally, there are three tabs to view all tasks, active tasks, or completed tasks. Redux ensures efficient state management across the application, providing a smooth user experience.",
        used: ["react", "redux", "vercel"],
        viewSite: "https://todo-app-tau-gray.vercel.app/",
        git: "https://github.com/zehraBal/Redux-Applications",
        image: "/images/todo.png",
      },
    ],
  },
  footer: {
    title: "Send me a message!",
    content: "Got a question or proposal, or just want to say hello? Go ahead.",
  },
};
