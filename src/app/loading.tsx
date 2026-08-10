import { LoadingMessages } from "@/components/layout/loading-messages";

export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-3xl items-center px-4 py-20 md:px-8">
      <LoadingMessages />
    </div>
  );
}
