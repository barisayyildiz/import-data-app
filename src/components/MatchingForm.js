import Label from "./Label";
import Dropdown from "./Dropdown";

export default function MatchingForm({
  onSubmit,
  importedColumns,
  formQuestions,
  errors,
}) {
  return (
    <form
      id="form1"
      onSubmit={onSubmit}
      className="flex flex-col items-start gap-5"
    >
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex flex-row items-center gap-2.5 w-full">
          <div className="flex flex-row items-center py-0.5 px-0 gap-2 w-full">
            <p className="flex flex-col item-start p-0 grow-1">
              Form Questions
            </p>
            <p className="flex flex-col item-start p-0 grow-1">
              Imported Columns
            </p>
          </div>
        </div>
      </div>
      {importedColumns.map((item, key) => {
        const hasError = errors.includes(formQuestions[key]);
        return (
          <div className="flex flex-col items-start gap-5 w-full" key={key}>
            <div className="flex flex-row items-center gap-2.5 w-full">
              <div className="flex flex-row items-start py-0.5 px-0 gap-2 w-full">
                <Label value={formQuestions[key]} className="grow-1" />
                <div className="w-full flex flex-col gap-2.5">
                  <Dropdown
                    className="grow-1"
                    options={importedColumns}
                    id={formQuestions[key]}
                  />
                  {/* validation */}
                  <p
                    className={`${
                      hasError ? "color-red-400 font-medium" : "hidden"
                    }`}
                  >
                    {formQuestions[key]} should be selected
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <input id="formsubmit" className="hidden" type="submit"></input>
    </form>
  );
}
