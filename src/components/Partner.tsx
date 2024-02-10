import logohei from "../assets/images/hei.png";
import numer from "../assets/images/numer.png";
import telma from "../assets/images/telma.png";

export const Partner = () => {
  return (
    <section className="mb-2 bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-gray-800">
          OUR PARTNERS
        </h2>
        <p className="mt-2 text-center text-gray-600">
          More than multiple Companies and Institutions that trust us over the
          years
        </p>
        <div className="mt-6 flex w-full justify-evenly">
          <img
            alt="HEI"
            className="h-20 w-auto"
            src={logohei}
            style={{
              objectFit: "cover",
            }}
          />
          <img
            alt="Numer"
            className="h-20 w-auto"
            src={numer}
            style={{
              objectFit: "cover",
            }}
            width="100"
          />
          <img
            alt="Telma"
            className="h-20 w-auto"
            src={telma}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};
