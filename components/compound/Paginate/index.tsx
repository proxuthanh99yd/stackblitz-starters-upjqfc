import { memo } from "react";

interface IPaginateProps {
    data: [];
    limit: number;
    currentPage: number;
    onChange: (page: number) => void;
}
const Paginate = memo(function Paginate({
    data,
    limit,
    currentPage,
    onChange,
}: IPaginateProps) {
    const handleChange = (page: number) => {
        onChange(page);
    };
    const handleNext = () => {
        onChange(++currentPage);
    };
    const handlePrev = () => {
        onChange(--currentPage);
    };
    return (
        <ul className="flex gap-2 mt-4">
            <li>
                <button
                    disabled={currentPage <= 1}
                    type="button"
                    onClick={handlePrev}
                    className={`flex items-center justify-center h-10 px-4 shadow-md rounded ${
                        currentPage <= 1 ? "bg-gray-200 shadow-inner" : ""
                    }`}
                >
                    Prev
                </button>
            </li>
            {Array.from(
                { length: Math.ceil(data.length / limit) },
                (_, page) => (
                    <li key={`page-${page}`}>
                        <button
                            type="button"
                            onClick={() => handleChange(page + 1)}
                            className={`flex items-center justify-center w-10 h-10 shadow-md rounded ${
                                page + 1 === currentPage
                                    ? "bg-blue-500 text-white"
                                    : ""
                            }`}
                        >
                            {page + 1}
                        </button>
                    </li>
                )
            )}
            <li>
                <button
                    disabled={currentPage >= Math.ceil(data.length / limit)}
                    type="button"
                    onClick={handleNext}
                    className={`flex items-center justify-center h-10 px-4 shadow-md rounded ${
                        currentPage >= Math.ceil(data.length / limit)
                            ? "bg-gray-200 shadow-inner"
                            : ""
                    }`}
                >
                    Next
                </button>
            </li>
        </ul>
    );
});
export default Paginate;
