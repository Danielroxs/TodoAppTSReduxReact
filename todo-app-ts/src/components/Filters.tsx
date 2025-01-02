import React from "react";
import { FILTERS_BUTTONS, TODO_FILTERS } from "../consts";

interface Props {
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filterSelected === "all" ? "selected" : ""}
            onClick={() => onFilterChange("all")}
          >
            Todas
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filterSelected === "active" ? "selected" : ""}
            onClick={() => onFilterChange("active")}
          >
            Activas
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filterSelected === "completed" ? "selected" : ""}
            onClick={() => onFilterChange("completed")}
          >
            Completadas
          </a>
        </li>
      </ul>
    </>
  );
};
