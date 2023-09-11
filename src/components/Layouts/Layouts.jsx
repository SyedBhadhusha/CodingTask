import React, { useMemo } from "react";
import CompanyLogo from "../../assets/company-logo.png";

const Layouts = () => {
  const numbersArr = useMemo(() => [1, 2, 3, 4, 5, 6], []);
  return (
    <section className="flex flex-col gap-8 px-8 py-12 md:px-32 md:flex-row">
      <div className="flex flex-col flex-1 gap-4">
        <h2 className="text-[24px] font-bold">Beautiful Layouts</h2>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          perferendis facere corrupti tempore officiis illum non ipsum,
          explicabo corporis doloremque accusamus blanditiis repellendus debitis
          laborum! Deserunt molestias sit, nesciunt repellat, commodi quod illo
          numquam consequatur praesentium obcaecati aspernatur aperiam omnis
          explicabo reprehenderit dicta ex aut provident corporis officiis
          dolorem. Voluptas.
        </p>
      </div>
      <div className="grid flex-1 grid-cols-2 md:grid-cols-3 ">
        {numbersArr.map((n) => (
          <div key={n}>
            <p className="flex justify-center text-gray-400 uppercase">
              Partner's
            </p>

            {/* <h3 className={`font-semibold uppercase text-lg ${n % 2 === 0 ? "text-primary-black" : 'text-secondary-green'}`}>Logo</h3> */}
            <img src={CompanyLogo} alt="Company Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Layouts;
