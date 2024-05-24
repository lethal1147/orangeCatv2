import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FriendSkeleton() {
  return (
    <Card className="col-span-1 h-80">
      <Skeleton className="h-36 w-full" />
      <div className="flex h-16 w-full items-center">
        <Skeleton className="mx-5 h-1/2 w-full" />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <Skeleton className="mx-5 h-8" />
        <Skeleton className="mx-5 h-8" />
      </div>
    </Card>
  );
}
