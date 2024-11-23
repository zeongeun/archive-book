import Image from "next/image";

export const SearchResult = ({ query, books, isLoading }) => {
  if (books === null) return;
  if (isLoading) return <p>로딩중...</p>;
  if (books.length === 0)
    return (
      <p>
        {`'${query}'와(과) 일치하는 검색 결과가 없어요. 다른 검색어를 입력해보세요.`}
      </p>
    );

  return (
    <div className="p-5">
      <ul>
        {books.map((book) => (
          <li key={book.isbn} className="mb-4">
            <div className="flex gap-4 items-center">
              <Image
                src={book.thumbnail}
                alt={book.title}
                width={69}
                height={101}
                style={{ width: 69, height: 101 }}
                priority
              />
              <div>
                <p className="mb-1">{book.title}</p>
                <p className="text-[#9CABBB] text-sm">
                  {`${book.authors[0]} 외 1명 ・ ${book.datetime}`}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};