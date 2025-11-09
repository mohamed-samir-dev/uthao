import { lazy } from "react";

// Lazy loaded service components
const Services1 = lazy(() => import("./Services1/Services1"));
const Services2 = lazy(() => import("./Services2/Services2"));
const Services3 = lazy(() => import("./Services3/Services3"));
const Services4 = lazy(() => import("./Services4/Services4"));
const Services5 = lazy(() => import("./Services5/Services5"));

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