import { dummyData } from "@/utils/data";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import Head from "next/head";
import AllReports from "@/components/AllReports";
import Select from "react-select";

export default function Home({data}) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Monter Assignment</title>
        <meta property="og:title" content={"Monter"} />
        {/* <meta property="og:image" content={} /> */}
        <meta property="og:description" content={"Monter assignment"} />
        <meta name="description" content={"Monter assignment"}></meta>
        {/* <link
          rel="shortcut icon"
          href={}
          type="image/x-icon"
        /> */}
      </Head>
      <main className={`pb-8  bg-white relative flex justify-center items-center w-full h-screen`}>
        <button className="px-4 py-2 text-white tracking-wider bg-black rounded-lg" onClick={onOpenModal}>See reports</button>
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
        
        {/* <ReactSelect
            menuPortalTarget={document.body}
            menuPosition="fixed"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          /> */}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              borderRadius: 10,
              background:"white",
            },
          }}
        >
          <AllReports data={data}/>
        </Modal>
      </main>
      </>
  );
}

export const getServerSideProps=()=>{
  return{
    props:{
      data:dummyData
    }
  }
}
