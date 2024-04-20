import { useState } from "react";
import Head from "next/head";
import { dummyData } from "@/utils/data";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AllReports from "@/components/AllReports";

export default function Home({ data }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Monter Assignment</title>
        <meta property="og:title" content={"Monter"} />
        <meta property="og:image" content="/vercel.svg" />
        <meta property="og:description" content={"Monter assignment"} />
        <meta name="description" content={"Monter assignment"}></meta>
        <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
      </Head>
      <main
        className={`pb-8 bg-white relative flex justify-center items-center w-full h-screen flex-col`}
      >
        <button
          className="px-4 py-2 text-white tracking-wider bg-black rounded-lg"
          onClick={onOpenModal}
        >
          See reports
        </button>
        <p className="text-gray-700 tracking-wider mt-6 text-[0.9rem]">
          Click on this button to see the reports.
        </p>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              borderRadius: 10,
            },
          }}
        >
          <AllReports data={data} />
        </Modal>
      </main>
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      data: dummyData,
    },
  };
};
