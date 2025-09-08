// hooks/useDeadlineReminders.js
function useDeadlineReminders() {
  const sendReminder = async (assignmentId) => {
    await axios.post("/api/reminders", { assignmentId });
    alert("Reminder email sent to students!");
  };

  return { sendReminder };
}