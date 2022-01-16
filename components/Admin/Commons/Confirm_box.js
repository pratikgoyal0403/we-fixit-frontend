import ElevatedButton from "../../Commons/Elevated_button";

export default function ConfirmBox({hideModal, onYes}) {
  return (
    <div className="px-6 pt-6">
      <p className="capitalize font-semibold">are you sure?</p>
      <div className="flex items-center justify-end">
        <ElevatedButton title="No" click={hideModal} className=" py-1 px-6 mr-3" />
        <ElevatedButton title="Yes" click={onYes} className=" py-1 px-6 bg-danger " />
      </div>
    </div>
  );
}
