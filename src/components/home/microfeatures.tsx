import { BullshitTranslator } from "@/components/micro/bullshit-translator";
import { DigitizationDetector } from "@/components/micro/digitization-detector";
import { StatusGenerator } from "@/components/micro/status-generator";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function Microfeatures() {
  return (
    <Section>
      <SectionLabel>MICROFEATURES</SectionLabel>
      <SectionHeading>Instrumente mici. Nervi mari.</SectionHeading>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <BullshitTranslator />
        <DigitizationDetector />
        <div className="lg:col-span-2">
          <StatusGenerator />
        </div>
      </div>
    </Section>
  );
}
