import { format } from "date-fns";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { RequestType } from "../../types";
import toTitleCase from "../../utils/toTitleCase";
import { Badge } from "../components/ui/badge";
import { cn } from "../../lib/utils";
import { badgeVariants } from "../components/ui/badge";
const RequestList = ({ requests }) => {
  const router = useRouter();

  function navigateToPage(id) {
    return router.push(`/requests/${id}`);
  }
  return (
    <Table>
      <TableCaption>A list of your requests.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Submitted Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Submitted By</TableHead>
          <TableHead>Approver</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests?.map((request: RequestType) => (
          <TableRow
            className="hover:cursor-pointer hover:bg-white"
            key={request.id}
            onClick={() => navigateToPage(request.id)}
          >
            <TableCell className="font-medium">{request.title}</TableCell>
            <TableCell>{request.description}</TableCell>
            <TableCell>{format(new Date(request.created), "PP")}</TableCell>
            <TableCell>
              <Badge
                variant={
                  request.priority.description === "medium"
                    ? "warning"
                    : request.priority.description === "high"
                    ? "error"
                    : "default"
                }
              >
                {request.priority.description?.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <Image
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={request.requester.image}
                  width={24}
                  height={24}
                  alt="avatar"
                />
                <p>{request.requester.name}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <Image
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={request.approver.image}
                  width={24}
                  height={24}
                  alt="avatar"
                />
                <p>{request.approver.name}</p>
              </div>
            </TableCell>
            <TableCell>{toTitleCase(request.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RequestList;
