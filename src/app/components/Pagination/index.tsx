import "./style.scss";

const Pagination = ({ items, page, setPage }: any) => {
  const numberOfPages = Math.round(items?.length / 10);
  const pagesNumbers = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <>
      {numberOfPages > 1 && (
        <div className="pagination">
          <button
            onClick={() =>
              setPage((page: number) =>
                page - 1 >= 0 ? page - 1 : numberOfPages - 1
              )
            }
          >
            Previous
          </button>
          {pagesNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber - 1)}
              className={pageNumber - 1 === page ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() =>
              setPage((page: any) =>
                page + 1 <= numberOfPages - 1 ? page + 1 : 0
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
