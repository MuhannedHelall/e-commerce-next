import { Fragment } from "react";

import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      <main className="container-fluid">{children}</main>
      <Footer />
    </Fragment>
  );
}
