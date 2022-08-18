import InfiniteScroll from "react-infinite-scroll-component";
import FormsListItem from "./FormsListItem";

function FormsList({ forms, selected, setSelected, handleMore, hasMore }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <InfiniteScroll
        dataLength={forms.length}
        hasMore={hasMore}
        next={handleMore}
        style={{
          overflow: "hidden",
        }}
        loader={
          <div class="anim spin-loader w-10 h-10 border-4 border-navy-100 border-t-navy-300 radius-full my-1 mx-auto"></div>
        }
        scrollableTarget="scrollableDiv"
        className="flex flex-col gap-4 w-full"
      >
        <ul className="flex flex-col gap-4 w-full">
          {forms.map((form) => {
            return (
              <li>
                <FormsListItem
                  selected={selected}
                  setSelected={setSelected}
                  form={form}
                  key={form.id}
                />
              </li>
            );
          })}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default FormsList;
