import ModalBox from "../component/Modal";
export default function Hero() {
  return (
    <>
      <div className="relative h-[300px] flex justify-center text-white">
        <div className="absolute inset-0 bg-image brightness-[30%]"></div>
        <div className="relative z-10 flex items-center flex-col justify-center">
          <h1 className="text-3xl font-bold">
            Connect with amazing people or find a new passion
          </h1>
          <p className="text-2xl">
            Anyone can organize and join events on React Events!
          </p>

          <ModalBox btnTitle={"Create your first event"} />
        </div>
      </div>
    </>
  );
}
