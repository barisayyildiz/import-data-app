import FormsListItem from "./FormsListItem";

function FormsList({ forms, selected, setSelected, props }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {forms.map((form) => {
        return (
          <FormsListItem
            selected={selected}
            setSelected={setSelected}
            form={form}
            key={form.id}
            {...props}
          />
        );
      })}
    </div>
  );
}

export default FormsList;
