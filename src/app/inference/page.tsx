"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

const AIExplorerTextPage = () => {
  const { address } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState<string | null>(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRequestInference = () => {
    if (!address || !reason) toast.error("Warning! Fill the inputs!");
    else {
      toast.success("Success! Request submitted.");
      handleCloseModal();
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div
          className="justify-content-center flex flex-col items-center text-center"
          style={{ transform: "translate(0px, 110%)" }}
        >
          <Image
            width={176}
            height={32}
            src={"/images/icon_logo2.svg"}
            alt="Logo"
            className="dark:hidden"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-bold max-w-3xl text-base">
            {
              "We're currently testing our latest features, and we'd love for you to join us. If you're interested in Inference, sign up for the waitlist, and you'll be among the first to get access. We'll keep you updated and reach out as soon as it's available. Thanks for your support!"
            }
          </p>

          <button
            className="mt-2 rounded-[5px] bg-primary px-10 py-3.5 text-white lg:px-8 xl:px-10"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Request Access
          </button>
        </div>
      </div>

      {showModal && (
        <div
          id="modal"
          className="fixed inset-0 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-11/12 rounded-lg bg-white shadow-lg dark:bg-gray-500 md:w-1/3">
            <div className="flex items-center justify-between p-4">
              <h2 id="modalTitle" className="text-xl font-semibold">
                Join waitlist
              </h2>
              <button
                id="closeModalBtn"
                className="text-xl font-bold text-gray-600 hover:text-gray-800"
                aria-label="Close Modal"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>

            <div className="px-4">
              <div className="flex flex-col">
                {/* <div className="mb-3 text-sm font-bold text-gray-600 dark:text-white">
                  Name
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                /> */}
                <div className="my-3 text-sm font-bold text-gray-600 dark:text-white">
                  Wallet
                </div>
                <input
                  type="email"
                  placeholder=""
                  value={address ?? ""}
                  readOnly
                  className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                <div className="my-3 text-sm font-bold text-gray-600 dark:text-white">
                  Reason
                </div>
                <textarea
                  rows={5}
                  placeholder=""
                  style={{ resize: "none" }}
                  value={reason ?? ""}
                  onChange={(e) => setReason(e.target.value)}
                  className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 text-xs font-bold">
              <button
                className="mr-2 w-full rounded bg-gray-200 px-4 py-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                onClick={handleRequestInference}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIExplorerTextPage;
