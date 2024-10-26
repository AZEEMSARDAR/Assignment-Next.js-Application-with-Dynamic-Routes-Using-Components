import Nav from "../components/nav";

export default function About() {
  return (
    <div>
      <Nav />
      <div>
        <h1 className="text-center text-3xl p-5 w-max rounded-xl m-auto mt-20 bg-red-500 text-black font-semibold">
          Assingment of Dynamic Routing Using Components{" "}
        </h1>
      </div>
      <p className="text-center text-2xl px-4 py-2 w-max m-auto mt-4 rounded-2xl bg-yellow-500 font-semibold">
        <span className="text-black font-bold">Regards:</span> S Azeem Ali
      </p>
    </div>
  );
}
