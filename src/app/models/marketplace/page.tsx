"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SearchForm from "@/components/Header/SearchForm";
import SelectGroup from "@/components/FormElements/SelectGroup/SelectGroup";
import ButtonSmall from "@/components/Buttons/ButtonSmall";

import { IModel } from "@/types";

import { getAiModels } from "@/apis/api-v1";

const MarketplacePage = () => {
  const [models, setModels] = useState<IModel[] | null>(null);

  useEffect(() => {
    (async () => {
      const _ = await getAiModels();
      setModels(_);
    })();
  }, []);

  return (
    <div className="max-w-8xl mx-auto">
      <div
        className="
            w-full
            rounded-[10px]
            bg-white
            shadow-1
            dark:bg-gray-dark
            dark:shadow-card
            sm:h-[85vh]
          "
      >
        <div className="flex flex-col">
          <div className="m-5 mb-0">
            <SearchForm />
          </div>
          <div className="flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="my-3 ml-2 sm:ml-5">
              <ButtonSmall
                label="All"
                link="#"
                customClasses="bg-[#0000FE] text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 mr-5 my-3"
              />
              <ButtonSmall
                label="Text"
                link="#"
                customClasses="text-dark dark:text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 bg-gray-200 dark:bg-gray-500 my-3"
              />
            </div>
            <div className="my-3 ml-2 sm:ml-3">
              <ButtonSmall
                label="All"
                link="#"
                customClasses="bg-[#0000FE] text-white dark:text-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 dark:bg-gray-500 mx-1 sm:mx-2 my-3"
              />
              <ButtonSmall
                label="Meta"
                link="#"
                customClasses="text-dark dark:text-white bg-gray-200 rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 dark:bg-gray-500 mx-1 sm:mx-2 my-3"
              />
              <ButtonSmall
                label="Mistral"
                link="#"
                customClasses="text-dark dark:text-white bg-gray-200 rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 dark:bg-gray-500 mx-1 sm:mx-2 my-3"
              />
              <ButtonSmall
                label="Google"
                link="#"
                customClasses="text-dark dark:text-white bg-gray-200 rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 dark:bg-gray-500 mx-1 sm:mx-2 my-3"
              />
            </div>
            <div className="w-xl ml-2 sm:m-5">
              <SelectGroup />
            </div>
          </div>

          <div className="grid p-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {models &&
              models.length > 0 &&
              models.map((model, index) => (
                <Link
                  href={`details/${model._id}`}
                  className="ease mx-3 transform transition-transform duration-300 hover:-translate-y-[5px]"
                  key={index}
                >
                  <div className="my-5 flex w-full flex-col rounded-[10px] bg-gray-200 p-2 shadow-2 dark:bg-gray-400">
                    <div className="flex">
                      <Image
                        className="m-4"
                        src={"/images/ai-explorer/icon-meta.png"}
                        alt="Logo"
                        width={50}
                        height={32}
                      />
                      <div className="my-5 flex flex-col dark:text-white">
                        <p className="text-large font-bold">{model.name}</p>
                        <div className="flex items-center justify-start">
                          <p className="mx-1 bg-gray-4 px-1 text-sm font-medium">
                            {model.type}
                          </p>
                          <p className="mx-1 bg-gray-4 px-1 text-sm font-medium">
                            Meta
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mx-2 line-clamp-2 text-xs text-dark dark:text-white">
                      {model.description}
                    </p>

                    <div className="flex items-center justify-between p-2">
                      <div className="text-xs text-dark dark:text-white">
                        {model.downloads}
                      </div>
                      <div className="text-xs text-dark dark:text-white">
                        Update at {model.updated_at}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
