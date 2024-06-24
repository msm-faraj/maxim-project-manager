import Input from "./Input";
export default function () {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
