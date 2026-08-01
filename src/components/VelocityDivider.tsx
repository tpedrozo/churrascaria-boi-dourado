import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const LINE =
  "CARNES · MASSAS · BUFFET · BOI DOURADO · TRADIÇÃO GAÚCHA · CURITIBA · DESDE 2008 · ";

export default function VelocityDivider() {
  return (
    <div
      className="velocity-band relative flex w-full items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <ScrollVelocityContainer className="velocity-band__text w-full font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={12} direction={1}>
          <span className="velocity-band__chunk">{LINE}</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="velocity-band__fade velocity-band__fade--left" />
      <div className="velocity-band__fade velocity-band__fade--right" />
    </div>
  );
}
