interface TypographyProps {
  text: string;
}

export function TypographyH1(props: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl tracking-normal">
      {props.text}
    </h1>
  );
}

export function TypographyH2(props: TypographyProps) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-normal">
      {props.text}
    </h2>
  );
}

export function TypographyH3(props: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.text}
    </h3>
  );
}

export function TypographyH4(props: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.text}
    </h4>
  );
}

export function TypographyP(props: TypographyProps) {
  return <p className="leading-7 not-first:mt-6">{props.text}</p>;
}

export function TypographyBlockquote(props: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.text}
    </blockquote>
  );
}

export function TypographyLead(props: TypographyProps) {
  return <p className="text-muted-foreground text-xl">{props.text}</p>;
}

export function TypographyLarge(props: TypographyProps) {
  return <div className="text-lg font-semibold">{props.text}</div>;
}

export function TypographySmall(props: TypographyProps) {
  return (
    <small className="text-sm leading-none font-medium">{props.text}</small>
  );
}

export function TypographyMuted(props: TypographyProps) {
  return <p className="text-muted-foreground text-sm">{props.text}</p>;
}
