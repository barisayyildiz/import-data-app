import FormsListItem from "./FormsListItem";

function FormsList({ forms }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {forms.map((form, key) => {
        return <FormsListItem form={form} key={key} />;
      })}
    </div>
  );
}

export default FormsList;
