import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import { Project } from "@site/src/types";

import ProjectBadges from "./ProjectBadges";

type ProjectItemProps = {
  project: Project;
  isThemeLight?: boolean;
};

import styles from "./ProjectItem.module.css";

export default function ProjectItem({
  project,
  isThemeLight = false,
}: ProjectItemProps) {
  const { id, link, name, title, shortDescription } = project;
  return (
    <div className="col col--4 margin-bottom--lg">
      <div
        className={clsx(
          "card text--center",
          styles.card,
          !isThemeLight && styles.cardDarker
        )}
      >
        <div className="card__header">
          <h3>{title}</h3>
          <ProjectBadges addMargin={false} projectId={id} />
        </div>
        <div className="card__body">
          <p>{shortDescription}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" href={link}>
            Learn more about {name}
          </Link>
        </div>
      </div>
    </div>
  );
}
