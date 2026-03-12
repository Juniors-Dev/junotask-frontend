import { useCreateLeave } from "@/hooks/useLeaves";
import { useGetMe } from "@/hooks/useUsers";
import { LeaveType } from "@/enums/leave";
import React from "react";
import { usePanel } from "@/context/PanelContext";

export default function RegisterRequest() {
  const { mutate, isPending } = useCreateLeave();
  const { data: me } = useGetMe();
  const { closePanel } = usePanel();
  const formRef = React.useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!me?.id) return;
    const form = new FormData(e.currentTarget);
    mutate(
      {
        type: form.get("type") as LeaveType,
        startDate: new Date(form.get("startDate") as string).toISOString(),
        endDate: new Date(form.get("endDate") as string).toISOString(),
        user: `/api/users/${me?.id}`,
        ...(form.get("comment") ? { comment: form.get("comment") as string } : {}),
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
        <label className="form-label">Leave Type</label>
        <select
          name="type"
          defaultValue={LeaveType.VACATION}
          className="form-select"
        >
          {Object.values(LeaveType).map((t) => (
            <option key={t} value={t}>
              {t.charAt(0) + t.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Start Date</label>
        <input
          name="startDate"
          type="date"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">End Date</label>
        <input
          name="endDate"
          type="date"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Comment (optional)</label>
        <textarea
          name="comment"
          className="form-input"
          rows={3}
          placeholder="Add context for your request..."
        />
      </div>
      <div className="slide-panel-footer">
        <button type="submit" disabled={isPending || !me?.id} className="btn-primary">
          {isPending ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
