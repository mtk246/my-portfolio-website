export default function Work() {
  return (
    <div className="grid grid-col grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="col-span-1 m-auto p-5 bg-gray-400 bg-opacity-30 rounded-2xl shadow-xl transform-gpu skew-y-4 rotate-6">
        <div className="transform-gpu -skew-y-4 -rotate-6">
          <h1 className="text-red-500 font-bold text-9xl tracking-widest">
            4+
          </h1>
          <p className="text-gray-500 font-semibold text-3xl py-2">
            Years Experience
            <br />
            in <br />
            Information Technology
          </p>
        </div>
      </div>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 bg-red-200 text-center">
        <div class="transform scale-110 -rotate-6 bg-gray-200 rounded-xl p-3">
          Valentine Day App with Flutter
          <img
            src="https://picsum.photos/200"
            alt=""
            className="m-auto p-3 rounded-3xl"
          />
        </div>
        <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15 bg-gray-200 rounded-xl p-3">
          React Native
          <img
            src="https://picsum.photos/200"
            alt=""
            className="m-auto p-3 rounded-3xl"
          />
        </div>
        <div class="transform scale-150 translate-y-11 bg-gray-200 rounded-xl p-3">
          Library App with TKinter Python
          <img
            src="https://picsum.photos/200"
            alt=""
            className="m-auto p-3 rounded-3xl"
          />
        </div>
        <div class="transform translate-y-12 translate-x-10 -rotate-12 bg-gray-200 rounded-xl p-3">
          Valentine Day Website
          <img
            src="https://picsum.photos/200"
            alt=""
            className="m-auto p-3 rounded-3xl"
          />
        </div>
        <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 scale-90 bg-gray-200 rounded-xl p-3">
          Furniture Website with PHP
          <img
            src="https://picsum.photos/200"
            alt=""
            className="m-auto p-3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
