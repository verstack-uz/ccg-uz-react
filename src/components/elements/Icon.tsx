export interface IconProps {
  iconName: string;
  size?: number;
  shrink?: number;
}

export enum IconNames {
  /**
   * List of icon class names used in the application.
   * These icons are sourced from the Iconify, enabled by FlyonUI library.
   * For more icons, visit: https://icon-sets.iconify.design/
   */
  STAR = "icon-[tabler--star]",
  USER = "icon-[solar--user-bold]",
  FILTER_FUNNEL = "icon-[mdi--filter-outline]",
  SETTINGS = "icon-[solar--settings-linear]",
  EYE = "icon-[tabler--eye]",
  EYE_OFF = "icon-[tabler--eye-off]",
}

export default function Icon(props: IconProps) {
  return (
    <span
      className={`${props.iconName} size-${props.size ?? 4.5} shrink-${props.shrink ?? 0}`}
    ></span>
  );
}
