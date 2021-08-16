import { BodyContent } from "../const";

export default function Work() {
  return (
    <div className="grid grid-col grid-cols-1 lg:grid-cols-3 gap-4">
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
      <BodyContent className="body-content col-span-2 text-center p-4">
        <h1 className="text-red-500 font-bold text-4xl p-4">Creativities</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-red-300 bg-opacity-30 rounded-2xl transform-gpu rotate-12 h-3/4 mx-9">
            <div className="transform-gpu -rotate-12">
              <h1 className="py-3"> Valentine Day App with Flutter</h1>
              <img src="https://picsum.photos/300" alt="" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-1 bg-red-300 bg-opacity-30 rounded-2xl transform-gpu rotate-12 h-3/4 mx-9">
            <div className="transform-gpu -rotate-12">
              <h1 className="py-3"> Shop App with Flutter</h1>
              <img src="https://picsum.photos/300" alt="" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-1 bg-red-300 bg-opacity-30 rounded-2xl transform-gpu rotate-12 h-3/4 mx-9">
            <div className="transform-gpu -rotate-12">
              <h1 className="py-3"> Furniture Website with PHP</h1>
              <img src="https://picsum.photos/300" alt="" className="mx-auto" />
            </div>
            <div className="transform-gpu -rotate-12">
              <h1 className="py-3"> Furniture Website with PHP</h1>
              <img src="https://picsum.photos/300" alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      </BodyContent>
    </div>
  );
}
