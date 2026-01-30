import Link from "next/link";

type PaginationProps = {
  /** Base path for links (e.g. "/locations"). Query params page and page_size are appended. */
  basePath: string;
  page: number;
  pageSize: number;
  totalPages: number;
};

const linkClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#dddddd] dark:border-[#2a353b] hover:bg-gray-50 dark:hover:bg-[#1a262e] transition font-medium text-sm";
const disabledClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e5e5e5] dark:border-[#2a353b] text-gray-400 dark:text-[#617c89] font-medium text-sm cursor-not-allowed";

export default function Pagination({
  basePath,
  page,
  pageSize,
  totalPages,
}: PaginationProps) {
  const hasPrev = page > 1;
  const hasNext = page < totalPages;
  const prevHref = `${basePath}?page=${page - 1}&page_size=${pageSize}`;
  const nextHref = `${basePath}?page=${page + 1}&page_size=${pageSize}`;

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-4"
      aria-label="Pagination"
    >
      {hasPrev ? (
        <Link href={prevHref} className={linkClass}>
          Previous
        </Link>
      ) : (
        <span className={disabledClass}>Previous</span>
      )}
      <span className="text-sm text-[#617c89] dark:text-[#8a9ca6]">
        Page {page} of {totalPages}
      </span>
      {hasNext ? (
        <Link href={nextHref} className={linkClass}>
          Next
        </Link>
      ) : (
        <span className={disabledClass}>Next</span>
      )}
    </nav>
  );
}
