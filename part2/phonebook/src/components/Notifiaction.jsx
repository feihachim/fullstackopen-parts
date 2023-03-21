const Notifiaction = ({ message, status }) => {
  if (message === null) {
    return null;
  }
  let statusMessage = status ? "success" : "error";

  return <div className={statusMessage}>{message}</div>;
};

export default Notifiaction;
