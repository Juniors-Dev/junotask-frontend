import React from "react";
import { useUpdateLeave, useGetFilteredLeaves } from "@/hooks/useLeaves";
import { getLeaveStatusCode } from "@/enums/leave";
import { LeaveStatus } from "@/enums/leave";
import StatusBadge from "../Ui/StatusBadge/StatusBadge";
import { leaveStatusStyles } from "../Ui/StatusBadge/StatusBadge.styles";

type ActionModal = {
  leaveId: number;
  action: "approve" | "decline";
} | null;

export default function LeaveRequests() {
  const [filter, setFilter] = React.useState(LeaveStatus.ALL);
  const { data } = useGetFilteredLeaves(getLeaveStatusCode(filter));
  const updateLeave = useUpdateLeave();
  const leaves = data?.member ?? [];

  const [actionModal, setActionModal] = React.useState<ActionModal>(null);
  const [comment, setComment] = React.useState("");

  const openModal = (leaveId: number, action: "approve" | "decline") => {
    setComment("");
    setActionModal({ leaveId, action });
  };

  const closeModal = () => {
    setActionModal(null);
    setComment("");
  };

  const handleConfirm = () => {
    if (!actionModal) return;
    if (actionModal.action === "decline" && !comment.trim()) return;

    const state = actionModal.action === "approve" ? 2 : 3;
    updateLeave.mutate(
      {
        id: actionModal.leaveId,
        state,
        ...(comment.trim() ? { comment: comment.trim() } : {}),
      } as any,
      { onSuccess: closeModal },
    );
  };

  return (
    <div className="table-wrap">
      <select
        name="status"
        className="form-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value as LeaveStatus)}
      >
        {Object.values(LeaveStatus).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <h3 className="text-lg font-semibold text-heading px-6 py-4">
        Pending Leave Requests
      </h3>
      <table className="w-full">
        <thead>
          <tr className="table-head">
            <th className="table-cell text-left">Employee</th>
            <th className="table-cell text-left">Type</th>
            <th className="table-cell text-left">Start Date</th>
            <th className="table-cell text-left">End Date</th>
            <th className="table-cell text-left">State</th>
            <th className="table-cell text-left">Comment</th>
            <th className="table-cell text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.length === 0 && (
            <tr>
              <td colSpan={7} className="table-cell text-center text-muted">
                No {filter.toLowerCase()} requests
              </td>
            </tr>
          )}
          {leaves.map((leave) => (
            <tr key={leave.id} className="table-row">
              <td className="table-cell font-medium">{leave.user.name}</td>
              <td className="table-cell capitalize">
                {leave.type.toLowerCase()}
              </td>
              <td className="table-cell">
                {new Date(leave.startDate).toLocaleDateString()}
              </td>
              <td className="table-cell">
                {new Date(leave.endDate).toLocaleDateString()}
              </td>
              <td className="table-cell">
                <StatusBadge
                  status={leave.stateLabel}
                  className={leaveStatusStyles[leave.stateLabel as LeaveStatus]}
                />
              </td>
              <td className="table-cell text-sm text-muted whitespace-pre-line">
                {leave.comment ?? "—"}
              </td>
              {leave.stateLabel === LeaveStatus.PENDING && (
                <td className="table-cell text-right">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => openModal(leave.id, "approve")}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openModal(leave.id, "decline")}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                    >
                      Decline
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {actionModal && (
        <>
          <div className="slide-backdrop" onClick={closeModal} />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="card w-full max-w-md p-6">
              <h3 className="text-lg font-semibold text-heading mb-4">
                {actionModal.action === "approve"
                  ? "Approve Request"
                  : "Decline Request"}
              </h3>
              <div className="form-group">
                <label className="form-label">
                  Comment{" "}
                  {actionModal.action === "decline"
                    ? "(required)"
                    : "(optional)"}
                </label>
                <textarea
                  className="form-input"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={
                    actionModal.action === "decline"
                      ? "Provide a reason for declining..."
                      : "Add an optional note..."
                  }
                  required={actionModal.action === "decline"}
                />
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={
                    updateLeave.isPending ||
                    (actionModal.action === "decline" && !comment.trim())
                  }
                  className="btn-primary"
                >
                  {updateLeave.isPending ? "Saving..." : "Confirm"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
