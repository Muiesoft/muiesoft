"use client";

import { useCallback, useState } from "react";
import type { ModulePlaceholderKey } from "@/config/module-placeholders";
import { getModulePlaceholder } from "@/config/module-placeholders";

export function useComingSoon(key: ModulePlaceholderKey) {
  const [open, setOpen] = useState(false);
  const content = getModulePlaceholder(key);
  const soon = content.comingSoon ?? {
    willDo: content.how,
    missing: content.missing,
    help: content.help,
  };

  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  return {
    open,
    show,
    hide,
    title: "ÎNCĂ NU",
    willDo: soon.willDo,
    missing: soon.missing,
    help: soon.help ?? content.help,
  };
}
