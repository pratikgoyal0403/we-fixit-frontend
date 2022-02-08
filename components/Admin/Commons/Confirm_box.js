import ElevatedButton from "../../Commons/Elevated_button";
import LinkButton from "../../Commons/Link_button";

export default function ConfirmBox({ hideModal, onYes }) {
  return (
    <div className="px-6 py-4">
      <p className="capitalize font-semibold">are you sure?</p>
      <div className="flex items-center justify-end">
        {/* <ElevatedButton title="No" click={hideModal} className=" py-1 px-6 mr-3" />
        <ElevatedButton title="Yes" click={onYes} className=" py-1 px-6 bg-danger " /> */}
        <LinkButton
          title="No"
          click={hideModal}
          className=" py-2 px-5 border mr-3 text-danger rounded-md hover:border-gray-300"
          style={{textDecoration: 'none'}}
        />
        <LinkButton
          title="Yes"
          click={onYes}
          className=" py-2 px-5 border rounded-md hover:border-gray-300"
          style={{textDecoration: 'none'}}
        />
      </div>
    </div>
  );
}
