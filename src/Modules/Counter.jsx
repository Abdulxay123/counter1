import React, { useState } from "react";

function Counter() {
  const [a, setCounter] = useState(0);
  const Countplus = () => {
    setCounter(a + 1);
  };
  const Countminus = () => {
    if (a > 0) {
      setCounter(a - 1);
    }
  };
  const Countreset = () => {
    setCounter(0);
  };
  return (
    <>
      <section className="bg-slate-600 h-[100vh]">
        <div className="container flex mx-auto md:w-[1000px] p-20 items-center justify-center">
          <div className="box w-[500px] h-[500px] bg-slate-500 p-10 rounded-xl">
            <h1 className="bg-white py-5 px-2  text-2xl rounded-xl text-center select-none">
              Counting:{a}
            </h1>

            <div className="box1">
              <div className="bottom flex cursor-pointer pt-[150px] flex-wrap justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  onClick={Countminus}
                  fill="brown"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="green"
                  onClick={Countplus}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                </svg>
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  width="80"
                  fill="white"
                  onClick={Countreset}
                  height="80"
                  className=""
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75zm8.492 2.272c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
