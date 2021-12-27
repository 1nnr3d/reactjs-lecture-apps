export default function Message({ msg, username }: any) {
  return (
    <div className={`px-3 pt-3 pb-1 bg-light rounded rounded-3 w-auto 
    ${msg.username === username ? "float-end text-end text-primary" : "float-start text-start"}`}>
      <span className="fw-bold">{msg.username}</span>
      <p>{msg.message}</p>
    </div>
  )
}

