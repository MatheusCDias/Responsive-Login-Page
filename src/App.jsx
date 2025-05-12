import image from "./assets/image.jpg";

function App() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#191919]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-start justify-center text-center p-20 gap-8 rounded-2xl xl:rounded-tr-none xl:rounded-br-none bg-[#151515]">
          <h1 className="text-2xl font-light text-white select-none">Login</h1>

          <div className="flex flex-col text-2xl text-left gap-2 font-extralight text-white">
            <span>Username</span>
            <input
              type="text"
              className="rounded-md p-1 border-1 border-transparent outline-none bg-[#222] focus:border-white transition duration-500"
            />
          </div>

          <div className="flex flex-col text-2xl text-left gap-2 font-extralight text-white">
            <span>Password</span>
            <input
              type="password"
              className="rounded-md p-1 border-1 border-transparent outline-none bg-[#222] focus:border-white transition duration-500"
            />
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border-2 border-[#999] rounded-full checked:bg-[#2D9963] checked:border-white transition duration-500"
              />
              <span className="text-base font-light text-[#999]">
                Remember Password
              </span>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button className="px-8 py-2 text-1xl rounded-md font-extralight text-white bg-[#2D9963] hover:cursor-pointer hover:scale-105 active:scale-100 transition duration-500 shadow-md">
              Go
            </button>
          </div>
          <p className="font-light text-[#999]">
            Don't have an account yet?{" "}
            <a href="#" className="text-white font-medium hover:underline transition duration-500">
              Sign up
            </a>
          </p>
        </div>

        <img
          src={image}
          alt=""
          className="w-[450px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"
        />
      </div>
    </section>
  );
}

export default App;
