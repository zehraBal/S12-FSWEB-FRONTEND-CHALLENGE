import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactForm({ handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { fullname: "", email: "", phone: "", message: "" },
    mode: "all",
  });

  const formSubmit = (formData) => {
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log("Message sent : ", res.data);
        handleClose();
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        console.warn(err);
        toast.error("Failed to send message. Please try again later.");
        handleClose();
      });
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center max-sm:top-[20%] msx-sm:justify-start max-sm:justify-start">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full text-left dark:bg-zinc-700 dark:text-white max-sm:w-[300px] max-sm:ml-[50px]">
        <h2 className="text-2xl font-bold mb-4">Contact Me </h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-white"
            >
              Fullname:
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              {...register("fullname", {
                required: "Fullname is required",
                minLength: {
                  value: 5,
                  message: "Enter a valid name ",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-300 dark:text-black"
              placeholder="Enter your fullname"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  dark:bg-gray-300 dark:text-black"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Phone number must contain only digits",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-300 dark:text-black"
              placeholder="Enter your phone number"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              {...register("message", { required: "Message is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  dark:bg-gray-300 dark:text-black"
              placeholder="Enter your message here"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={!isValid}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
