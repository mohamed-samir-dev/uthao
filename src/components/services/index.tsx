import Services1 from "./Services1/Services1";
import Services2 from "./Services2/Services2";
import Services3 from "./Services3/Services3";
import Services4 from "./Services4/Services4";
import Services5 from "./Services5/Services5";

export const Services = () => {
  return (
    <section>
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
      <Services5 />
    </section>
  );
};

export default Services;
export { Services1, Services2, Services3, Services4, Services5 };