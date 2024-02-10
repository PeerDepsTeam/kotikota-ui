import {Badge, BadgeProps} from "@/components/shadcn-ui/badge.tsx";

import {toHex} from "@/lib/string_to_color.ts";

export type CategoryBadgeProps = BadgeProps;

function CategoryBadge({children, ...props}: CategoryBadgeProps) {
  return (
    <Badge
      {...props}
      style={{backgroundColor: toHex(String(children)), color: "white"}}
    >
      {children}
    </Badge>
  );
}

export {CategoryBadge};
