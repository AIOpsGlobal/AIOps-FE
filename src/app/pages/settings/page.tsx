import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SettingBoxes from "@/components/SettingBoxes";

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
