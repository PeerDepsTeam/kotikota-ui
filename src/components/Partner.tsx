import logohei from "../assets/images/hei.png";
import numer from "../assets/images/numer.png";
import telma from "../assets/images/telma.png";

export const Partner = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-gray-800">
          OUR PARTNERS
        </h2>
        <p className="mt-2 text-center text-gray-600">
          More than multiple Companies and Institutions that trust us over the
          years
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <img
            alt="HEI"
            className="h-12"
            height="50"
            src={logohei}
            style={{
              aspectRatio: "100/50",
              objectFit: "cover",
            }}
            width="100"
          />
          <img
            alt="Numer"
            className="h-12"
            height="50"
            src={numer}
            style={{
              aspectRatio: "100/50",
              objectFit: "cover",
            }}
            width="100"
          />
          <img
            alt="Telma"
            className="h-12"
            height="50"
            src={telma}
            style={{
              aspectRatio: "100/50",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
      </div>
    </section>
  );
};
