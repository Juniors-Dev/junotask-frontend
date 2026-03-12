import React from "react";
import Icon from "@/components/Ui/Icon/Icon";
import { useActiveLeave } from "@/hooks/useLeaves";

export default function ActionMenue({
  className,
  onRegisterTask,
  onRequestLeave,
}: {
  className?: string;
  onRegisterTask?: () => void;
  onRequestLeave?: () => void;
}) {
  const { data: activeLeave } = useActiveLeave();

  return (
    <div className={`panel flex flex-col gap-6 ${className ?? ""}`}>
      <h2 className="font-bold text-lg text-heading">Quick Actions</h2>
      <div className="flex flex-col gap-3">
        <button className="btn-accent group" onClick={onRegisterTask}>
          <div className="flex items-center gap-3">
            <Icon name="ListPlus" size={20} />
            <span>Register Task</span>
          </div>
          <Icon
            name="ChevronRight"
            size={20}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </button>
        <button className="btn-outline group" onClick={onRequestLeave}>
          <div className="flex items-center gap-3">
            <Icon
              name="CalendarOff"
              size={20}
              className="text-body group-hover:text-primary"
            />
            <span className="font-semibold text-slate-700 group-hover:text-primary-hover">
              Request Leave
            </span>
          </div>
          <Icon
            name="ChevronRight"
            size={20}
            className="text-faint opacity-0 group-hover:opacity-100 group-hover:text-primary transition-opacity"
          />
        </button>
        {activeLeave && (
          <button
            className="btn-outline group"
            onClick={() => console.log("Cancel Leave clicked")}
          >
            <div className="flex items-center gap-3">
              <Icon
                name="CalendarOff"
                size={20}
                className="text-body group-hover:text-primary"
              />
              <span className="font-semibold text-slate-700 group-hover:text-primary-hover">
                Cancel Leave
              </span>
            </div>
            <Icon
              name="ChevronRight"
              size={20}
              className="text-faint opacity-0 group-hover:opacity-100 group-hover:text-primary transition-opacity"
            />
          </button>
        )}
      </div>
    </div>
  );
}
