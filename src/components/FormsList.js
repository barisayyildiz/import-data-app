import FormsListItem from "./FormsListItem";

function FormsList({ forms, selected, setSelected }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {forms.map((form) => {
        return (
          <FormsListItem
            selected={selected}
            setSelected={setSelected}
            form={form}
            key={form.id}
          />
        );
      })}
    </div>
  );
}

export default FormsList;
