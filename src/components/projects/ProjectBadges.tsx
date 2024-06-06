import React from "react";
import clsx from "clsx";
import { ProjectId } from "@site/src/types";
import { getProjectById } from "@site/src/data/projects";

type ProjectBadgesProps = {
  addMargin?: boolean;
  projectId: ProjectId;
};

export default function ProjectBadges({ addMargin = true, projectId }: ProjectBadgesProps) {
  const { isOpenSource = false, isOurs = false, type } = getProjectById(projectId);
  const isFunded = type === "funded";
  // Check if all false
  if (!isFunded && !isOpenSource && !isOurs) {
    return null;
  }
  return (
    <div className={clsx(addMargin && "margin-bottom--md")} style={{ lineHeight: 1 }}>
      {isOurs && <span className="badge badge--primary margin-horiz--xs">GRC-LED</span>}
      {/* {isFeatured && <span className="badge badge--info margin-horiz--xs">FEATURED</span>} */}
      {isFunded && <span className="badge badge--success margin-horiz--xs">FUNDED</span>}
      {isOpenSource && <span className="badge badge--secondary margin-horiz--xs">OPEN SOURCE</span>}
    </div>
  );
}
