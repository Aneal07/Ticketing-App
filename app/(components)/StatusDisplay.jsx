const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-500";
        return color;
      case "started":
        color = "bg-yellow-500";
        return color;
      case "not started":
        color = "bg-orange-500";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };
  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-white-500 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;