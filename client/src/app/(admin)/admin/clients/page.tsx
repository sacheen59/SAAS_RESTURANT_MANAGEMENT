"use client";
import { use, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, SlidersHorizontal, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchTenants } from "@/store/admin/tenant/actions/tenant-action";
import { AppDispatch, RootState } from "@/store";

const ClientPage = ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string }>;
}) => {
  const router = useRouter();
  const params = use(searchParams);
  const currentPage = Number(params?.page) || 1;
  const currentStatus = params?.status || "all";
  const itemsPerPage = 8;
  const dispatch = useDispatch<AppDispatch>();
  const { allTenantData, count, loading } = useSelector(
    (state: RootState) => state.tenant,
  );

  const totalPages = Math.max(1, Math.ceil(count / itemsPerPage));

  useEffect(() => {
    dispatch(fetchTenants({ page: currentPage, status: currentStatus }));
  }, [dispatch, currentPage, currentStatus]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <p className="font-bold text-primary tracking-wide text-[12px]">
            MANAGEMENT HUB
          </p>
          <h1 className="text-4xl font-bold">Clients</h1>
        </div>
        <Button
          onClick={() => router.push("/admin/clients/add-client")}
          className="cursor-pointer px-6 py-5"
        >
          <Plus />
          <span className="font-bold">Add Client</span>
        </Button>
      </div>
      <Card className="my-4 px-6 py-4 border-none shadow-none rounded-0">
        <div className="flex justify-between items-center">
          <div className="flex bg-transparent gap-2">
            {["all", "active", "suspended", "trial"].map((status) => (
              <Link
                key={status}
                href={`?status=${status}&page=1`}
                className={`text-muted-foreground font-semibold px-5 py-3 rounded-full transition-all duration-300 cursor-pointer capitalize ${
                  currentStatus === status
                    ? "bg-indigo-50 text-primary"
                    : "hover:bg-gray-50 text-muted-foreground"
                }`}
              >
                {status}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span>
              Showing {allTenantData.length} of {count}{" "}
              Clients
            </span>
            <SlidersHorizontal size={20} strokeWidth={1.5} />
          </div>
        </div>
        {/* table */}
        <div className="mt-4 border-t border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="border-b-0 hover:bg-transparent">
                <TableHead className="w-75 text-xs font-bold text-[#7a879e] uppercase tracking-wider py-4">
                  Tenant Name
                </TableHead>
                <TableHead className="text-xs font-bold text-[#7a879e] uppercase tracking-wider py-4 px-4">
                  Domain
                </TableHead>
                <TableHead className="text-xs font-bold text-[#7a879e] uppercase tracking-wider py-4 px-4">
                  Status
                </TableHead>
                <TableHead className="text-xs font-bold text-[#7a879e] uppercase tracking-wider py-4 px-4">
                  Created At
                </TableHead>
                <TableHead className="text-xs font-bold text-[#7a879e] uppercase tracking-wider py-4 px-4 text-right pr-8">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allTenantData.map((tenant) => (
                <TableRow
                  key={tenant.id}
                  className="border-b border-gray-100/80 hover:bg-gray-50/50"
                >
                  <TableCell className="py-3 border-l-2 border-transparent">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-[15px] text-gray-900">
                          {tenant.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-[#4b5563] text-[15px] font-medium">
                    {tenant.domain}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${tenant.status === "active" ? "bg-[#00d084]" : tenant.status === "trial" ? "bg-[#3b82f6]" : "bg-[#ced4da]"}`}
                      ></div>
                      <span
                        className={`text-[14px] font-bold capitalize ${tenant.status === "active" ? "text-[#00d084]" : tenant.status === "trial" ? "text-[#3b82f6]" : "text-[#868e96]"}`}
                      >
                        {tenant.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-[#4b5563] text-[14px] font-medium whitespace-pre-line leading-relaxed">
                    {tenant.created_at}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-right pr-8">
                    <div className="flex items-center justify-end gap-1 text-gray-400">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 cursor-pointer rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Edit2 size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 cursor-pointer rounded-md hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {!loading && allTenantData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No tenants found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between mt-2 p-2">
          <div className="text-[14px] font-semibold text-[#4b5563]">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2.5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={
                      currentPage > 1
                        ? `?status=${currentStatus}&page=${currentPage - 1}`
                        : "#"
                    }
                    className={
                      currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href={`?status=${currentStatus}&page=${pageNumber}`}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href={
                      currentPage < totalPages
                        ? `?status=${currentStatus}&page=${currentPage + 1}`
                        : "#"
                    }
                    className={
                      currentPage >= totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ClientPage;
