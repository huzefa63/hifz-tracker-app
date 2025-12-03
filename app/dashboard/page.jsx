import { MdDashboard } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
function Page() {
  return (
    <div className="px-2 py-5">
      <div className="flex items-center gap-3">
        <MdDashboard className="text-3xl" />
        <h1 className="text-xl">Dashboard</h1>
      </div>

      <div className="flex gap-3 w-full mt-5 tracking-wide">
        <div className="w-1/2 flex flex-col items-center gap-2 shadow py-5 rounded-md text-white bg-purple-500">
          <header className="text-gray-80 flex items-center gap-2">
            <IoIosArrowRoundForward /> current juz
          </header>
          <h1 className="">15</h1>
        </div>

        <div className="w-1/2 flex flex-col items-center gap-2 shadow py-5 rounded-md text-white bg-red-500">
          <header className="text-gray-80 flex items-center gap-2">
            <IoIosArrowRoundForward /> current surah
          </header>

          <h1>saffat 29</h1>
        </div>
      </div>

      <div className="flex gap-3 w-full mt-5 tracking-wide">
        <div className="w-1/2 flex flex-col items-center gap-2 shadow py-5 rounded-md text-white bg-amber-500">
          <header className="text-gray-80 flex items-center gap-2">
            <IoIosArrowRoundForward /> jadeed this week
          </header>

          <h1>10 pages & 12 lines</h1>
        </div>

        <div className="w-1/2 flex flex-col items-center gap-2 shadow py-5 rounded-md text-white bg-green-500">
          <header className="text-gray-80 flex items-center gap-2">
            <IoIosArrowRoundForward /> jadeed last week
          </header>
          <h1>10 pages</h1>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <header className="text-center text-2xl">This week murja'ah</header>
        <div className="w-full px-3 pt-5 tracking-wider mt-5 shadow space-y-5">
          <div className="bg-emerald-500 rounded-md p-3 text-white">
            <div className="flex items-center gap-3 bg-emerald-700 w-fit px-3 py-1 rounded-md">
              <SlCalender />
              <h1>Monday, january 21</h1>
            </div>
            <ul className=" mt-3 flex flex-col gap-1 border-b-1 pb-5 border-gray-300 text-sm">
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>

              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
            </ul>
          </div>
          <div className="bg-purple-500 rounded-md p-3 text-white">
            <div className="flex items-center gap-3">
              <SlCalender />
              <h1>Monday, january 21</h1>
            </div>
            <ul className=" mt-3 flex flex-col gap-1 border-b-1 pb-5 border-gray-300 text-sm">
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-8 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>

              <div className="ml-6 mt-3 text-sm  mb-5 ">
                <div className="bg-purple-800 p-5 shadow rounded-md space-y-3 ">
                  <div>
                    <h1 className="">question 1 - page 8</h1>
                    <h1>tambeeh - 3</h1>
                    <h1>talqeen - 4</h1>
                  </div>
                  <hr className="text-gray-400" />
                  <div>
                    <h1>question 2 - page 18</h1>
                    <h1>tambeeh - 5</h1>
                    <h1>talqeen - 2</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-8 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-8 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
            </ul>
          </div>
          <div className="bg-amber-500 rounded-md p-3 text-white">
            <div className="flex items-center gap-3">
              <SlCalender />
              <h1>Monday, january 21</h1>
            </div>
            <ul className=" mt-3 flex flex-col gap-1 border-b-1 pb-5 border-gray-300 text-sm">
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>

              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center justify-between hover:bg-white hover:cursor-pointer px-3">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <li className="text-gray-80 font-bold">juz 1 - 7 marks</li>
                </div>
                <IoIosArrowDown />
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-5 h-[500px] border w-full px-3 py-5 bg-rose-500 text-white">
          <header className="text-center text-2xl">This Week Juzhaali</header>
          <div className="grid grid-cols-5 my-5 text-center bg-rose-700 py-3 px-1 rounded-md">
            <p className="text-left pl-1 truncate">day</p>
            <p>juz</p>
            <p>tambeeh</p>
            <p>talqeen</p>
            <p>marks</p>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-5 text-center">
              <p className="text-left pl-1 truncate">Monday</p>
              <p>15-16</p>
              <p>17</p>
              <p>6</p>
              <p className="relative ">
                8
                <IoIosArrowDown className="absolute top-1/2 -translate-1/2 right-0" />
              </p>
            </div>
            <div className="ml-6 mt-3 text-sm  mb-5 ">
              <div className="bg-rose-800 p-5 shadow rounded-md space-y-3 ">
                <div>
                  <h1 className="">Start page - 126</h1>
                  <h1>End page- 139</h1>
                  <h1>Total pages- 13</h1>
                </div>
               
              </div>
            </div>
            <div className="grid grid-cols-5 text-center">
              <p className="text-left pl-1 truncate">Tuesday</p>
              <p>15-16</p>
              <p>17</p>
              <p>6</p>
              <p className="relative ">
                7
                <IoIosArrowDown className="absolute top-1/2 -translate-1/2 right-0" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
            