import { useCreateTask } from "@/hooks/useTasks";
import { useGetMe } from "@/hooks/useUsers";
import { TaskStatus } from "@/enums/task";
import React from "react";
import { usePanel } from "@/context/PanelContext";

export default function RegisterTask() {
  const { mutate, isPending } = useCreateTask();
  const { data: me } = useGetMe();
  const { closePanel } = usePanel();
  const formRef = React.useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!me?.id) return;
    const form = new FormData(e.currentTarget);
    mutate(
      {
        title: form.get("title") as string,
        project: form.get("project") as string,
        status: form.get("status") as TaskStatus,
        user: `/api/users/${me?.id}`,
        startedAt: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          formRef.current?.reset();
          closePanel();
        },
      },
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Task title</label>
        <input
          name="title"
          placeholder="What are you working on?"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Project</label>
        <input
          name="project"
          placeholder="Which project?"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          name="status"
          defaultValue={TaskStatus.WORKING}
          className="form-select"
        >
          {Object.values(TaskStatus).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="slide-panel-footer">
        <button type="submit" disabled={isPending || !me?.id} className="btn-primary">
          {isPending ? "Saving..." : "Register Task"}
        </button>
      </div>
    </form>
  );
}
