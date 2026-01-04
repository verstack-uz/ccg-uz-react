interface TypographyProps {
  text: string;
}

export function TypographyH1(props: TypographyProps) {
  return <h1 className="text-4xl tracking-normal">{props.text}</h1>;
}

export function TypographyH2(props: TypographyProps) {
  return <h2 className="text-3xl tracking-normal">{props.text}</h2>;
}

export function TypographyH3(props: TypographyProps) {
  return <h3 className="text-2xl tracking-normal">{props.text}</h3>;
}

export function TypographyH4(props: TypographyProps) {
  return <h4 className="text-xl tracking-normal">{props.text}</h4>;
}

export function TypographyP(props: TypographyProps) {
  return <p className="">{props.text}</p>;
}

export function TypographyBlockquote(props: TypographyProps) {
  return <blockquote className="">{props.text}</blockquote>;
}

export function TypographyLead(props: TypographyProps) {
  return <p className="text-lg font-light">{props.text}</p>;
}

export function TypographyLarge(props: TypographyProps) {
  return <div className="text-lg font-light tracking-wider">{props.text}</div>;
}

export function TypographySmall(props: TypographyProps) {
  return <small className="text-sm">{props.text}</small>;
}

export function TypographyMuted(props: TypographyProps) {
  return <p className="text-muted">{props.text}</p>;
}

export function TypographyError(props: TypographyProps) {
  return <p className="text-red-600">{props.text}</p>;
}

export function TypographySuccess(props: TypographyProps) {
  return <p className="text-green-600">{props.text}</p>;
}

export function TypographyWarning(props: TypographyProps) {
  return <p className="text-yellow-600">{props.text}</p>;
}

export function TypographyInfo(props: TypographyProps) {
  return <p className="text-blue-600">{props.text}</p>;
}
