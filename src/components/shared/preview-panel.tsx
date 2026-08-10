import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import {
  getModulePlaceholder,
  type ModulePlaceholderKey,
} from "@/config/module-placeholders";

export function PreviewPanel({
  placeholderKey,
  problem,
  how,
  missing,
  helpHref = "/contribuie",
  demo,
}: {
  placeholderKey?: ModulePlaceholderKey;
  problem?: string;
  how?: string;
  missing?: string;
  helpHref?: string;
  demo?: React.ReactNode;
}) {
  if (placeholderKey) {
    return (
      <ModulePlaceholder
        content={getModulePlaceholder(placeholderKey)}
        demo={demo}
      />
    );
  }

  return (
    <ModulePlaceholder
      content={{
        id: "modul-rezervat",
        title: "Următorul pas",
        problem: problem ?? "",
        how: how ?? "",
        demoSteps: [],
        architecture: ["UI → repository → adapter"],
        missing: missing ?? "",
        roadmap: ["Înlocuiește adapterul local când există date"],
        help: "Deschide un issue sau contribuie la specificație.",
        helpHref,
      }}
      demo={demo}
    />
  );
}
