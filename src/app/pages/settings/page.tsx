import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SettingBoxes from "@/components/SettingBoxes";

export const metadata: Metadata = {
  title: "Intelliphy AI",
  description: "Intelliphy",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">

        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
