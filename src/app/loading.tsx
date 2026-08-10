import { LoadingMessages } from "@/components/layout/loading-messages";
import { StampLoader } from "@/components/ui/stamp-loader";

export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-8 px-4 py-20 md:px-8">
      <StampLoader size="lg" />
      <LoadingMessages />
    </div>
  );
}
